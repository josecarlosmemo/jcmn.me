import { GeneralData, Project, Skill, Social } from "@/typings";
import { db } from "./firebase";
import { collection, getDocs, query, orderBy, limit, where, DocumentReference, getDoc } from "firebase/firestore/lite";
import getFile from "./getFile";
import { getSkillFromRef } from "./getSkills";

export type PageData = {
    socials: Social[];
    pageInfo: GeneralData;
    skills: Skill[];
    projects: Project[];
    featuredProjects: Project[];
};

export default async function getPageData(): Promise<PageData> {
    // References
    const generalDataRef = collection(db, "page_info");
    const projectsRef = collection(db, "projects");
    const skillsRef = collection(db, "skills");

    // Queries
    const generalDataQuery = query(generalDataRef, orderBy("__name__"), limit(1));
    const projectsQuery = query(projectsRef,orderBy("updatedAt", "desc"), where("isPublished", "==", true));
    const skillsQuery = query(skillsRef, where("isShownInPortfolio", "==", true));

    // Snapshots    
    const generalDataSnapshot = await getDocs(generalDataQuery);
    const projectsSnapshot = await getDocs(projectsQuery);
    const skillsSnapshot = await getDocs(skillsQuery);

    // Data
    const pageInfo = {
        name: generalDataSnapshot.docs[0].data()["name"],
        role: generalDataSnapshot.docs[0].data()["role"],
        heroImage: await getFile(generalDataSnapshot.docs[0].data()["heroImage"]),
        about: generalDataSnapshot.docs[0].data()["about"],
        profilePicture: await getFile(generalDataSnapshot.docs[0].data()["profilePicture"]),
        phoneNumber: generalDataSnapshot.docs[0].data()["phoneNumber"],
        email: generalDataSnapshot.docs[0].data()["email"],
        address: generalDataSnapshot.docs[0].data()["address"], 
        resume: await getFile(generalDataSnapshot.docs[0].data()["resume"]),
        heroTexts: generalDataSnapshot.docs[0].data()["heroTexts"],
    } as GeneralData;

    const socialsRefArray = generalDataSnapshot.docs[0].data()["socials"] as DocumentReference[];

    const socials = await Promise.all(socialsRefArray.map(async (socialRef: DocumentReference) : Promise<Social>=> {
        const socialDoc = await getDoc(socialRef);
        if (!socialDoc.exists()) {
            throw new Error("Social not found");
        }
        return {
            name: socialDoc.data()["name"],
            link: socialDoc.data()["link"],
        } as Social;
    }));

     // Create {skillRef: skill} map
    const skillsMap = new Map<DocumentReference, Skill>();
    

    const skills = await Promise.all(skillsSnapshot.docs.map(async (doc): Promise<Skill> => {
        const skill = {
            title: doc.data()["title"],
            icon: doc.data()["icon"] ?? await getFile(doc.data()["image"]),
        } as Skill;
        skillsMap.set(doc.ref, skill);  
        return skill;
    }));

   


    const projects = await Promise.all(projectsSnapshot.docs.map(async (doc): Promise<Project> => {
        return {
            title: doc.data()["title"],
            description: doc.data()["description"],
            image: await getFile(doc.data()["image"]),
            // Get technologies from skills array
            technologies: await Promise.all(doc.data()["technologies"].map(async (skillRef: DocumentReference) => {
                let skill = skillsMap.get(skillRef);
                if (skill === undefined) {
                    // Try to get skill from database
                    skill = await getSkillFromRef(skillRef);

                    // Check if skill is still undefined
                    if (skill === undefined) {
                        throw new Error("Skill not found");
                    }

                }
                return skill;
            })),
            isFeatured: doc.data()["isFeatured"],
            githubLink: doc.data()["githubLink"] ?? null,
            demoLink: doc.data()["demoLink"] ?? null,
        } as Project;
    }));

    const featuredProjects = projects.filter((project) => project.isFeatured);

    return { socials, pageInfo, skills, projects, featuredProjects };
}
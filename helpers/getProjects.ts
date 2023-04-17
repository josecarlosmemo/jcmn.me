import { db } from "./firebase";
import { Project } from "../typings";
import { collection, getDocs, where, query, DocumentReference  } from "firebase/firestore/lite";
import getFile from "./getFile";
import { getSkillFromRef } from "./getSkills";

const projectsRef = collection(db, "projects");

export default async function getPublishedProjects() {
    const projectsQuery = query(projectsRef, where("isPublished", "==", true));
    const projectsSnapshot = await getDocs(projectsQuery);
    const projects = projectsSnapshot.docs.map(async(doc) => {
        return {
            title: doc.data()["title"],
            description: doc.data()["description"],
            image: await getFile(doc.data()["image"]),
            githubLink: doc.data()["githubLink"],
            demoLink: doc.data()["demoLink"],
            isFeatured: doc.data()["isFeatured"],
            technologies: await Promise.all(doc.data()["technologies"].map(async (skillRef: DocumentReference) => {
                return await getSkillFromRef(skillRef);
            }
            )),
        } as Project;
    }
    );
    return await Promise.all(projects);
    
   
    
}
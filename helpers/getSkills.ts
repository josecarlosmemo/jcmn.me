import { db } from "./firebase";
import { Skill } from "../typings";
import { collection, getDocs, where, query, getDoc, DocumentReference  } from "firebase/firestore/lite";
import getFile from "./getFile";

export default async function getSkills() {
    const skillsRef = collection(db, "skills");
    const skillsQuery = query(skillsRef, where("isShownInPortfolio", "==", true));
    const skillsSnapshot = await getDocs(skillsQuery);
    
    const skills =   skillsSnapshot.docs.map(async(doc) => {
        return {
            title: doc.data()["title"],
            icon: doc.data()["icon"] ?? await getFile(doc.data()["image"]),
        } as Skill;
    }
    );
    return await Promise.all(skills);
    
}

export async function getSkillFromRef(skillRef: DocumentReference) {
    const skillDoc = await getDoc(skillRef);

    if (!skillDoc.exists()) {
        console.log("No such document!");
        throw new Error("No such document!");
    }

    let data = skillDoc.data();

    if (data === undefined) {
        console.log("No data");
        throw new Error("No data");
    }

    return {
        title: skillDoc.data()["title"],
        icon: skillDoc.data()["icon"] ?? await getFile(skillDoc.data()["image"]),
    } as Skill;
}
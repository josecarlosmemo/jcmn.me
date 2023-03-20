import { db } from "./firebase";
import { PageInfo, Social } from "../typings";
import { collection, getDocs } from "firebase/firestore/lite";
import { DocumentReference } from "firebase/firestore";
import getFile from "./getFile";

export default async function getPageInfo() {
    const pageInfoRef = collection(db, "page_info");
    const pageInfoSnapshot = await getDocs(pageInfoRef);
    // Get the first document in the collection except for the socials array


    const pageInfo = {
        name: pageInfoSnapshot.docs[0].data()["name"],
        role: pageInfoSnapshot.docs[0].data()["role"],
        heroImage: await getFile(pageInfoSnapshot.docs[0].data()["heroImage"]),
        about: pageInfoSnapshot.docs[0].data()["about"],
        profilePicture: await getFile(pageInfoSnapshot.docs[0].data()["profilePicture"]),
        phoneNumber: pageInfoSnapshot.docs[0].data()["phoneNumber"],
        email: pageInfoSnapshot.docs[0].data()["email"],
        address: pageInfoSnapshot.docs[0].data()["address"],
        resume: await getFile(pageInfoSnapshot.docs[0].data()["resume"]),
        heroTexts: pageInfoSnapshot.docs[0].data()["heroTexts"],

    } as PageInfo;
    return pageInfo;
    
}

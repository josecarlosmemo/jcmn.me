import { db } from "./firebase";
import { Social } from "../typings";
import { collection, getDocs } from "firebase/firestore/lite";

export default async function getSocials() {     
    const socialsRef = collection(db, "socials");
    const socialsSnapshot = await getDocs(socialsRef);
    const socials: Social[] = [];
    socialsSnapshot.forEach((doc) => {
        socials.push(doc.data() as Social);
    });
    return socials;

}
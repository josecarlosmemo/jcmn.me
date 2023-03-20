import { storage } from "./firebase";
import { getDownloadURL, ref } from "firebase/storage";

export default async function getFile(file: string) {
    const storageRef = ref(storage, file);
    const url = await getDownloadURL(storageRef);
    return url;
}

import {firebase_app} from "./config";
import {collection, doc, getDocs, getFirestore, query, updateDoc, where} from "firebase/firestore";
import {Product} from "@/app/type";


const db = getFirestore(firebase_app)

export async function getAvailableProducts(): Promise<{ result: any, error: any }> {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("available", "==", true));

    let error = null;
    let snapshot = null
    let result = []

    try {
        snapshot = await getDocs(q)
        const docSnapshots = snapshot.docs;

        console.log(docSnapshots.length)

        for (const i in docSnapshots) {
            const doc = docSnapshots[i].data();
            result.push({id: docSnapshots[i].id, ...doc})
        }

    } catch (e) {
        error = e;
    }


    return {result, error};
}

export async function getAllProducts(): Promise<{ result: Product[], error: any }> {
    const productsRef = collection(db, "products");
    const q = query(productsRef);

    let error = null;
    let snapshot = null
    let result: Product[] = []

    try {
        snapshot = await getDocs(q)
        const docSnapshots = snapshot.docs;

        for (const i in docSnapshots) {
            const doc = docSnapshots[i].data();
            // @ts-ignore
            result.push({id: docSnapshots[i].id, ...doc})
        }

    } catch (e) {
        error = e;
    }


    return {result, error};
}

export async function setAvailability(id: string, available: boolean): Promise<{ result: any, error: any }> {
    let result = null;
    let error = null;

    try {
        result = await updateDoc(doc(db, "products", id), {
            available: available
        })
    } catch (e) {
        error = e;
    }

    return {result, error};
}

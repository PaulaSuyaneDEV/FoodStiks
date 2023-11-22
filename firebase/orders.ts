import {firebase_app} from "./config";
import {collection, doc, getDocs, getFirestore, query, setDoc, where} from "firebase/firestore";
import {Order} from "@/app/type";

const db = getFirestore(firebase_app)

export async function addOrder(email: string, data: Order) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, "orders", email), data, {
            merge: true,
        });
        console.log({result})
    } catch (e) {
        error = e;
    }

    console.log({result, error})

    return {result, error};
}

export async function getOrders(email: string): Promise<{ result: any, error: any }> {
    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, where("email", "==", email));

    let error = null;
    let snapshot = null
    let result = []

    try {
        snapshot = await getDocs(q)
        const docSnapshots = snapshot.docs;

        for (const i in docSnapshots) {
            const doc = docSnapshots[i].data();
            result.push({id: docSnapshots[i].id, ...doc})
        }

    } catch (e) {
        error = e;
    }


    return {result, error};
}


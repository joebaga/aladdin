import { getDocs, query, collection, orderBy, doc, setDoc } from "firebase/firestore";
import { firestore } from "../components/firebase.config";


//saving data
export const saveItem =  async (data) => {
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`),data, {merge: true,
    }
    );
};

// food items

export const getAllFoodItems = async () => {
    const items = await getDocs (query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );
    return items.docs.map((doc) => doc.data());
};

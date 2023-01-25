import {collection, doc, getDocs, query, setDoc, where} from "firebase/firestore/lite";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebaseConfig";

export const useFirestore = () => {

    const currentUser = useSelector(state => state.user.currentUser);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const getData = async () => {
        try {
            setLoading(true);
            const dataRef = collection(db, "reservas");
            const q = query(dataRef, where("uid", "==", currentUser.uid));
            const querySnapshot = await getDocs(q);
            const dataDB = querySnapshot.docs.map((doc) => doc.data());
            setData(dataDB);
        } catch (error) {
            setError(error.code);

        } finally {
            setLoading(false);
        }
    };

    const addData = async (totalPrice, viaje) => {
        try {
            setLoading(true);
            const newDoc = {
                resid: nanoid(6),
                totalPrice: totalPrice,
                uid: currentUser.uid,
                viajes: viaje.map((vi) => (

                    {
                        city: vi.city,
                        price: vi.price,
                        quantity: vi.quantity
                    }
                ))
      
            };

            const docRef = doc(db, "reservas", newDoc.resid); //tiene que ser string

            await setDoc(docRef, newDoc);

            setData([...data, newDoc]);

        } catch (error) {
            setError(error.code);
        } finally {
            setLoading(false);
        }
    }

    return {
        data,
        getData,
        loading,
        addData,
        error
    }

}


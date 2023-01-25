import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

export const firebaseConfig = {
    apiKey: "AIzaSyCSEDOhyNdc0e2JGli-LJ5-PH8FI_4I-WU",
    authDomain: "trineo-viajes.firebaseapp.com",
    projectId: "trineo-viajes",
    storageBucket: "trineo-viajes.appspot.com",
    messagingSenderId: "1096773839073",
    appId: "1:1096773839073:web:a46110e7a4e2dfed2befa0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.useDeviceLanguage();

const db = getFirestore(app);
export { auth, db };
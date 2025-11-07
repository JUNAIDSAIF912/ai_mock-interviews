import { initializeApp, getApp, getApps } from "firebase/app";

import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDL5gNVUChQ8ThHFcCG_EqNvLf92stO670",
    authDomain: "prepwise-8ff4b.firebaseapp.com",
    projectId: "prepwise-8ff4b",
    storageBucket: "prepwise-8ff4b.firebasestorage.app",
    messagingSenderId: "1051172915911",
    appId: "1:1051172915911:web:95e76c7be0b40546378ce2",
    measurementId: "G-4SJCXYCE9T"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
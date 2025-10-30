import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore ,doc, getDoc, setDoc,} from "firebase/firestore";

const config = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId:import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const firestoreDB = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ "prompt": "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    try {
        const userRef = doc(firestoreDB, "users", `${userAuth.uid}`);
        const userSnapshot = await getDoc(userRef);
        if (!userSnapshot.exists()) {
            const { displayName, email } = userAuth;
            const createdAt = new Date().toString();
            try {
                await setDoc(userRef, { displayName, email, createdAt, ...additionalData });
            } catch (error) {
                console.log(error.message, "error creating user  firestone data base");
            }
        } 
        return userRef;
    } catch (error) {
        console.log(error, "====DB");
    }
}
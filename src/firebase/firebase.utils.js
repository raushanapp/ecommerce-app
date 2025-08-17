import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "ecommerce-project-94e90.firebaseapp.com",
    projectId: "ecommerce-project-94e90",
    storageBucket: "ecommerce-project-94e90.firebasestorage.app",
    messagingSenderId: "500976829823",
    appId: "1:500976829823:web:c9ee5b65a1068bb35b064a",
    measurementId: "G-Q7DMX81TZX"
};
const app = initializeApp(config);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ "prompt": "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
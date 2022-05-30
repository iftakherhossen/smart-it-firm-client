import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializationFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializationFirebase;
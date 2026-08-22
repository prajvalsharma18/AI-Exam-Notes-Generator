
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authaiexamnotes-d2745.firebaseapp.com",
  projectId: "authaiexamnotes-d2745",
  storageBucket: "authaiexamnotes-d2745.firebasestorage.app",
  messagingSenderId: "722798677649",
  appId: "1:722798677649:web:9128132962cba8b606f930"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}
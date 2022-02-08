// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjKjg0Mg2vos7Hj6cpu2L_hpMwNEU-L60",
  authDomain: "veteapp-34d1d.firebaseapp.com",
  projectId: "veteapp-34d1d",
  storageBucket: "veteapp-34d1d.appspot.com",
  messagingSenderId: "98656828784",
  appId: "1:98656828784:web:e8a3b5bb7247aff06863b5",
  measurementId: "G-VCKS6QS3J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)

// export { app, db, auth }
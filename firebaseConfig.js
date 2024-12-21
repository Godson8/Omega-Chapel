// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
  authDomain: "omega-chapel-website.firebaseapp.com",
  projectId: "omega-chapel-website",
  storageBucket: "omega-chapel-website.appspot.com",
  messagingSenderId: "129958972998",
  appId: "1:129958972998:web:8028412a2fd68737e20447",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNswCjW4hhhn8ZwSFVur_hSDjlSSxJiNw",
  authDomain: "react-chat-4a566.firebaseapp.com",
  projectId: "react-chat-4a566",
  storageBucket: "react-chat-4a566.appspot.com",
  messagingSenderId: "834057297538",
  appId: "1:834057297538:web:24d7b2c2adb4f2381c1e9b",
  measurementId: "G-29V14M6N38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
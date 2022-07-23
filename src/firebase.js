// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYV9RK0zlu9UxoDPmH_OxkpZU3adFDWZw",
  authDomain: "cap1312-f1d8b.firebaseapp.com",
  projectId: "cap1312-f1d8b",
  storageBucket: "cap1312-f1d8b.appspot.com",
  messagingSenderId: "114750164801",
  appId: "1:114750164801:web:be0a9a1b666fa7964ddbc0",
  measurementId: "G-8R8V7FP5K2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuF7GXgv-aXh2rg4EV7FnuoW7h8PTSLqw",
  authDomain: "fer201m-a4c6e.firebaseapp.com",
  projectId: "fer201m-a4c6e",
  storageBucket: "fer201m-a4c6e.appspot.com",
  messagingSenderId: "72492087435",
  appId: "1:72492087435:web:435ffbc8a9ae6c9715bc8e",
  measurementId: "G-VBT5M39E95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
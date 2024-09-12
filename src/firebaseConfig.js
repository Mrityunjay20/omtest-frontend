// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzNKwkCtK1nI2KV7qSNo9N05Mhntqb17s",
  authDomain: "indiestori-52acf.firebaseapp.com",
  projectId: "indiestori-52acf",
  storageBucket: "indiestori-52acf.appspot.com",
  messagingSenderId: "129149198191",
  appId: "1:129149198191:web:b2af75701cf2aa155ed29a",
  measurementId: "G-1FKF7SZH9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

const analytics = getAnalytics(app);

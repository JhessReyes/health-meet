// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNjWfRsft7S0EyG3qBpEDCJnMK7ab45bM",
    authDomain: "healthmeet-7c9df.firebaseapp.com",
    projectId: "healthmeet-7c9df",
    storageBucket: "healthmeet-7c9df.appspot.com",
    messagingSenderId: "328314411354",
    appId: "1:328314411354:web:78155e679901fe70fe7b63",
    measurementId: "G-4BNLYM381R"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb);
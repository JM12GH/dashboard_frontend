// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 // apiKey:  //YOU SHOULD PUT THE APIKEY HERE
  authDomain: "react-ded10.firebaseapp.com",
  projectId: "react-ded10",
  storageBucket: "react-ded10.appspot.com",
  messagingSenderId: "102864766751",
  appId: "1:102864766751:web:6f1b66755887f3618e922a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
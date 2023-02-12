// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2P7QB40LkLE044vwyqxo2tgNEW-EN7IA",
  authDomain: "some-a4f5d.firebaseapp.com",
  projectId: "some-a4f5d",
  storageBucket: "some-a4f5d.appspot.com",
  messagingSenderId: "680923418487",
  appId: "1:680923418487:web:641e5e2e8ad5c94b19db72",
  measurementId: "G-Z6J697JVD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();
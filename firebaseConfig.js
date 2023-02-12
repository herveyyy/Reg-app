// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRbiYapsuaiDJsDvEQsfpto2ReTrA8Fv8",
  authDomain: "fir-627bd.firebaseapp.com",
  projectId: "fir-627bd",
  storageBucket: "fir-627bd.appspot.com",
  messagingSenderId: "651438894311",
  appId: "1:651438894311:web:eecbf3458dbb58aa1c4642",
  measurementId: "G-WVYPBGJCEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();
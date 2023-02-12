// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFh7ABUUuvgXXh4ahjU5fQ7ngqzveD8JY",
  authDomain: "reg-app1.firebaseapp.com",
  projectId: "reg-app1",
  storageBucket: "reg-app1.appspot.com",
  messagingSenderId: "139348892295",
  appId: "1:139348892295:web:20d5bb18a6fc23666bf622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();
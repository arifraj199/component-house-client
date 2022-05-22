// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK-DdzM7K-yxO-pFfygaxgrKRd4w3InGY",
  authDomain: "component-house.firebaseapp.com",
  projectId: "component-house",
  storageBucket: "component-house.appspot.com",
  messagingSenderId: "288939452382",
  appId: "1:288939452382:web:0f6fa7adef73ef46075f4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
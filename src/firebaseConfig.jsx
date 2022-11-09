// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrMKjsBAE8FdhM6RiWFOTX8vGxFCL2bY4",
  authDomain: "webchat-96792.firebaseapp.com",
  projectId: "webchat-96792",
  storageBucket: "webchat-96792.appspot.com",
  messagingSenderId: "842953549883",
  appId: "1:842953549883:web:417d283f2cafb13ce6d41e",
  measurementId: "G-5V3HNWYWQF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore(app)


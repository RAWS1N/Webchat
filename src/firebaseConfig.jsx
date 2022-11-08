// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBXRMcd44Kqgcwv2wikLBkSkdVo5vgqOTI",
  authDomain: "webchat-d8dca.firebaseapp.com",
  projectId: "webchat-d8dca",
  storageBucket: "webchat-d8dca.appspot.com",
  messagingSenderId: "232590667453",
  appId: "1:232590667453:web:0676bde721cf3eb35ed1d4",
  measurementId: "G-F4M0MYGSMW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app)

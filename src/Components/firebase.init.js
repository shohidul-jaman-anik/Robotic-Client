// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ3uofFBhFUMs3nAUWTT7tJ-znxIoOte4",
  authDomain: "robotic-d0eb2.firebaseapp.com",
  projectId: "robotic-d0eb2",
  storageBucket: "robotic-d0eb2.appspot.com",
  messagingSenderId: "653176521886",
  appId: "1:653176521886:web:65e070c9214d8a7d41278f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

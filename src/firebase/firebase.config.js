// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhdgOS3ePJyx2m26rIMBbmzrFrh1jTpHE",
  authDomain: "book-store-11c30.firebaseapp.com",
  projectId: "book-store-11c30",
  storageBucket: "book-store-11c30.appspot.com",
  messagingSenderId: "269470678635",
  appId: "1:269470678635:web:ec9f6a3897e6373951bb2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaMQex-yttYgHU0R5cLQFGg8IrxIMc7oc",
  authDomain: "next--js-chat.firebaseapp.com",
  projectId: "next--js-chat",
  storageBucket: "next--js-chat.appspot.com",
  messagingSenderId: "314174947189",
  appId: "1:314174947189:web:e2d34cc7d26d0c51ce5d3c",
  measurementId: "G-T4B7X8PGY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {auth}

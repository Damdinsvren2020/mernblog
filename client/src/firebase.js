// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c6f60.firebaseapp.com",
  projectId: "mern-blog-c6f60",
  storageBucket: "mern-blog-c6f60.appspot.com",
  messagingSenderId: "898533209329",
  appId: "1:898533209329:web:77c472efa882d5271ba550",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
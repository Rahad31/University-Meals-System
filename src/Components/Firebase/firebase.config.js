// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUmRI0qRjbYyU4YlMLleGS6rNnYQBAffw",
  authDomain: "uni-meal-142d8.firebaseapp.com",
  projectId: "uni-meal-142d8",
  storageBucket: "uni-meal-142d8.appspot.com",
  messagingSenderId: "649325064239",
  appId: "1:649325064239:web:f5287d98466f5b28c916da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

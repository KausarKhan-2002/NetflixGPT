// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsNlF89ieRoMaiWYg15r048O4AiqcW0Og",
  authDomain: "netflixgpt-629d9.firebaseapp.com",
  projectId: "netflixgpt-629d9",
  storageBucket: "netflixgpt-629d9.firebasestorage.app",
  messagingSenderId: "679175709175",
  appId: "1:679175709175:web:63d07b8f7268d7ec894ef2",
  measurementId: "G-5C6Z7VSTBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
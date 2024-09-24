// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKGNzM_PpHYYFyld6QBTFuEKfVduLwslE",
  authDomain: "netflixgpt-14b0c.firebaseapp.com",
  projectId: "netflixgpt-14b0c",
  storageBucket: "netflixgpt-14b0c.appspot.com",
  messagingSenderId: "111196377735",
  appId: "1:111196377735:web:7ebb74a6e1c91c37e55e22",
  measurementId: "G-L8QB62M6NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
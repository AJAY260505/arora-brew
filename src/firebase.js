// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABNL5X1jVi3-EbWAVtBD4ZCry52yTKMco",
  authDomain: "arora-brew.firebaseapp.com",
  projectId: "arora-brew",
  storageBucket: "arora-brew.appspot.com",
  messagingSenderId: "251884147349",
  appId: "1:251884147349:web:dcbd9a182d0511d6dd819c",
  measurementId: "G-ZLK2SQ3F81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
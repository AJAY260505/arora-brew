// src/firebase/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
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
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db };
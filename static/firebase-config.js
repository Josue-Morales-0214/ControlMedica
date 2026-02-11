// Firebase Configuration for Frontend
//Copy this file to static/ folder as config.js

const firebaseConfig = {
  apiKey: "AIzaSyBMZzNbQdjT8s-dx-6g8dg2VVZInPymfFA",
  authDomain: "control-medica.firebaseapp.com",
  projectId: "control-medica",
  storageBucket: "control-medica.firebasestorage.app",
  messagingSenderId: "49259805115",
  appId: "1:49259805115:web:c97ed9ed44167895ceac9e",
  measurementId: "G-EYX8DFBMX3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log("Firebase initialized for frontend");

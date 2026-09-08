import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration ថ្មីសម្រាប់ ks-archi
const firebaseConfig = {
  apiKey: "AIzaSyD071NThwA5_Kwe7drZnVlxAJ-SeeSaWrk",
  authDomain: "ks-archi.firebaseapp.com",
  projectId: "ks-archi",
  storageBucket: "ks-archi.firebasestorage.app",
  messagingSenderId: "937068032559",
  appId: "1:937068032559:web:339d6f610997134be90cda",
  measurementId: "G-P7PHMJ2QVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (ដំណើរការតែលើ Browser ប៉ុណ្ណោះ)
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// Export auth សម្រាប់យកទៅប្រើប្រាស់ក្នុង LoginModal.jsx
export const auth = getAuth(app);
export default app;
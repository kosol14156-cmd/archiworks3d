// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // បន្ថែមបន្ទាត់នេះសម្រាប់ Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUvJLH6-842wGh-DYWPZoUxdlbk3TkcZk",
  authDomain: "test-83622.firebaseapp.com",
  projectId: "test-83622",
  storageBucket: "test-83622.firebasestorage.app",
  messagingSenderId: "214909862005",
  appId: "1:214909862005:web:e142a220ccca3bd322783c",
  measurementId: "G-Y6112RS544",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export auth យកទៅប្រើប្រាស់ក្នុង LoginModal.jsx
export const auth = getAuth(app);

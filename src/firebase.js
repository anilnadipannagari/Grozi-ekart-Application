// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnt2xOOWhRKff0lx8pux2_hmkzjpniwDY",
  authDomain: "grozi-project.firebaseapp.com",
  projectId: "grozi-project",
  storageBucket: "grozi-project.firebasestorage.app",
  messagingSenderId: "719588193984",
  appId: "1:719588193984:web:fe068a40c71711362b1f25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app); // We will use this later
export default app;

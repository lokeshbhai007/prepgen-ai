// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "lokeshhh-portfolio.firebaseapp.com",
  projectId: "lokeshhh-portfolio",
  storageBucket: "lokeshhh-portfolio.firebasestorage.app",
  messagingSenderId: "132230016631",
  appId: "1:132230016631:web:29b08f627355a4f6972072",
  measurementId: "G-J0C48WQY0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD05viSQ5i8fSQwbfuWTwW3ZGUBDFRseBE",
  authDomain: "viajanding-vite.firebaseapp.com",
  projectId: "viajanding-vite",
  storageBucket: "viajanding-vite.appspot.com",
  messagingSenderId: "476310031048",
  appId: "1:476310031048:web:e0fc503b6bead39221b3fd",
  measurementId: "G-ELBJ9VZ6XQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
const analytics = getAnalytics(app);
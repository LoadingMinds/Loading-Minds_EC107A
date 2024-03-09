// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Corrected here
const firebaseConfig = {
  apiKey: "AIzaSyC9pmQPU4QIQPHUIckoLbIRgKFg8LoEtzQ",
  authDomain: "travelo-c19e5.firebaseapp.com",
  projectId: "travelo-c19e5",
  storageBucket: "travelo-c19e5.appspot.com",
  messagingSenderId: "147638098487",
  appId: "1:147638098487:web:d1bc6e645cc75b093f7db2",
  measurementId: "G-KBZ68D6113"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Corrected here
export {app, auth};
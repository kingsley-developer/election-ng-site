// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOhdYzvfGa04g4V-rRaqZ_U6Wy1RtskkE",
  authDomain: "election-ng.firebaseapp.com",
  projectId: "election-ng",
  storageBucket: "election-ng.appspot.com",
  messagingSenderId: "736559923783",
  appId: "1:736559923783:web:55e000a3f0b86241bd6762",
  measurementId: "G-GEY9BDN990"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuZoKIBJ21xuLyp_7UYD7X4KXyZ3ftgGQ",
  authDomain: "todo-app-5eda9.firebaseapp.com",
  projectId: "todo-app-5eda9",
  storageBucket: "todo-app-5eda9.appspot.com",
  messagingSenderId: "299139601263",
  appId: "1:299139601263:web:1355787c2f73a4d02ace9a",
  measurementId: "G-RNSBH42VVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
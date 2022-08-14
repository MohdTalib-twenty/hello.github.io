import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3P3qXtWJsOsItGzqgkhYzL6gDiXuoemM",
  authDomain: "login-6a82c.firebaseapp.com",
  projectId: "login-6a82c",
  storageBucket: "login-6a82c.appspot.com",
  messagingSenderId: "881356665954",
  appId: "1:881356665954:web:72ef4aa5ec07fe35f48d3b",
  measurementId: "G-EFQWE8DBST"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };

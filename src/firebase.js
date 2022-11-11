// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY_APIKEY,
  authDomain: process.env.REACT_APP_API_KEY_AUTHDOMAIN,
  projectId: process.env.REACT_APP_API_KEY_PROJECTID,
  storageBucket: process.env.REACT_APP_API_KEY_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_API_KEY_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_API_KEY_APPID,
});

export default app;

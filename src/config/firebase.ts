// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClkXc9e862LbRjsA94euXXp0Fkr8OaeTM",
  authDomain: "socialmedia-762c5.firebaseapp.com",
  projectId: "socialmedia-762c5",
  storageBucket: "socialmedia-762c5.appspot.com",
  messagingSenderId: "843145493159",
  appId: "1:843145493159:web:e859a4e706f95da5617982",
  measurementId: "G-VMMCGZGJV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const GoogleLoginProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
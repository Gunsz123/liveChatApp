// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiXYkuCQ3dQnX3YkHGVrw1yKK6WBYHOcY",
  authDomain: "livechatapp-2afdb.firebaseapp.com",
  projectId: "livechatapp-2afdb",
  storageBucket: "livechatapp-2afdb.appspot.com",
  messagingSenderId: "1065847545640",
  appId: "1:1065847545640:web:652f2dbeb86160601ffa1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default firebaseConfig; // Remove 'export const' before 'firebaseConfig' and use 'export default'

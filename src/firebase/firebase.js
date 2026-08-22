import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7gPmmOVeruohKYfm1nVCy_5q4stqMUqI",
  authDomain: "haven-properties.firebaseapp.com",
  projectId: "haven-properties",
  storageBucket: "haven-properties.firebasestorage.app",
  messagingSenderId: "367358560078",
  appId: "1:367358560078:web:b64f79e486d8424126401f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

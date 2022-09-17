import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHv3vQB3p4ItJbN0pTlWfoUZ1Pqwqia7c",
  authDomain: "chat-app-41bdb.firebaseapp.com",
  projectId: "chat-app-41bdb",
  storageBucket: "chat-app-41bdb.appspot.com",
  messagingSenderId: "928986812318",
  appId: "1:928986812318:web:f2179f02c4098e4770508f"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()
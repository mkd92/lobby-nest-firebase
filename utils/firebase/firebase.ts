import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlllc8bZgzhSs9Jsvh4vEFNYHajg9Ilng",
  authDomain: "lobby-c8f1f.firebaseapp.com",
  databaseURL: "https://lobby-c8f1f.firebaseio.com",
  projectId: "lobby-c8f1f",
  storageBucket: "lobby-c8f1f.appspot.com",
  messagingSenderId: "91079693744",
  appId: "1:91079693744:web:7e3ccb27356d7e87",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

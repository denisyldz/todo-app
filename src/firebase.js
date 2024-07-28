// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuKpYusxtZlzFWki1bMoFgqEI-42QlR5A",
  authDomain: "todo-app-9cb1c.firebaseapp.com",
  projectId: "todo-app-9cb1c",
  storageBucket: "todo-app-9cb1c.appspot.com",
  messagingSenderId: "30709981133",
  appId: "1:30709981133:web:9fe9bdc7a5d0cde7686e84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
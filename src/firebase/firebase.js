// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJk_QIxXwz9pf0VYNr68A06LfoFMwj1xo",
  authDomain: "moodmix-ae400.firebaseapp.com",
  projectId: "moodmix-ae400",
  storageBucket: "moodmix-ae400.firebasestorage.app",
  messagingSenderId: "85095713777",
  appId: "1:85095713777:web:9df194e4c61ec31d3b5250",
  measurementId: "G-BJYG49QRM6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };

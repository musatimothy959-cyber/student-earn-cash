import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdiod71wRZbN3u33tJ4NqC-kswSJDE__A",
  authDomain: "student-earn-cash-d969a.firebaseapp.com",
  projectId: "student-earn-cash-d969a",
  storageBucket: "student-earn-cash-d969a.firebasestorage.app",
  messagingSenderId: "788525383225",
  appId: "1:788525383225:web:b850249f5f78876be5d7e8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

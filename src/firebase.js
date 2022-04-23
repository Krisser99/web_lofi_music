
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCBlgOq_urYlk40lRKz19-Nf6vQwSQlCL4",
  authDomain: "web-lofi-music.firebaseapp.com",
  projectId: "web-lofi-music",
  storageBucket: "web-lofi-music.appspot.com",
  messagingSenderId: "635349134456",
  appId: "1:635349134456:web:7dc952eacd6e2fa087118d",
  measurementId: "G-EFM7P9LQSP"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const provider = new GoogleAuthProvider()

export {auth, db, provider};


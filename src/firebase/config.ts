import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKNCGvBtZdHV5xoTdhR43Bg9UP9HsSOCc",
  authDomain: "exactrem.firebaseapp.com",
  projectId: "exactrem",
  storageBucket: "exactrem.appspot.com",
  messagingSenderId: "840354678368",
  appId: "1:840354678368:web:25ce551e2db6701aaee505",
  measurementId: "G-9RYTE20Q9X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
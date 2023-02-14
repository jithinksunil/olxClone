import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4rwJlnC900w4-qP7-5QGtXW6LDrdI2Tk",
  authDomain: "olxsample-b62dd.firebaseapp.com",
  projectId: "olxsample-b62dd",
  storageBucket: "olxsample-b62dd.appspot.com",
  messagingSenderId: "533326956819",
  appId: "1:533326956819:web:864ccbb0530dc22c0232e6",
  measurementId: "G-SP0Q01KG0N"
};

const Firebase = initializeApp(firebaseConfig);
export default Firebase
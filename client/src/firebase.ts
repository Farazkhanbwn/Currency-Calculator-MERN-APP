import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCsBaVFABBK-cBZZ7rf8Qr_UQpm9DL2uyU",
  authDomain: "calculator-authentication.firebaseapp.com",
  projectId: "calculator-authentication",
  storageBucket: "calculator-authentication.appspot.com",
  messagingSenderId: "27507399056",
  appId: "1:27507399056:web:04d5aeb6f84956cf6b7b15",
  measurementId: "G-2FKF3Z0J0K",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

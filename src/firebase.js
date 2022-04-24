import { initializeApp } from "firebase/app";

import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-tutorial-793fd.firebaseapp.com",
  projectId: "fir-tutorial-793fd",
  storageBucket: "fir-tutorial-793fd.appspot.com",
  messagingSenderId: "605671842312",
  appId: "1:605671842312:web:466cc69d78b315e08c67bd",
  measurementId: "G-H5P7H9RMYF"
});

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const functions = getFunctions(firebaseApp);


export default firebaseApp;

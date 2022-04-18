import firebase from 'firebase/compat/app'

import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/functions";

firebase.initializeApp({
  apiKey: "AIzaSyCjrCyLrKqsrj9TbJiaLCqTZk8_0bmnnpo",
  authDomain: "fir-tutorial-793fd.firebaseapp.com",
  projectId: "fir-tutorial-793fd",
  storageBucket: "fir-tutorial-793fd.appspot.com",
  messagingSenderId: "605671842312",
  appId: "1:605671842312:web:466cc69d78b315e08c67bd",
  measurementId: "G-H5P7H9RMYF"
})


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;

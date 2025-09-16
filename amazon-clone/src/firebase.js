// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*import firebase from "firebase";*/
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDo2d-I0JZLukrAhi_m9z13MU7mrOLspyg",
  authDomain: "challenge-c2cde.firebaseapp.com",
  projectId: "challenge-c2cde",
  storageBucket: "challenge-c2cde.appspot.com",
  messagingSenderId: "163711663260",
  appId: "1:163711663260:web:7f71114c6eb7e23b940159",
  measurementId: "G-M7P28D006Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

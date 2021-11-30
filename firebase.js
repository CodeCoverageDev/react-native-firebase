// Import the functions you need from the SDKs you need
import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAehJ6A4liVO3cCiwStd6sutQCquYZ9vec",
  authDomain: "fir-auth-5cc6b.firebaseapp.com",
  projectId: "fir-auth-5cc6b",
  storageBucket: "fir-auth-5cc6b.appspot.com",
  messagingSenderId: "539345816436",
  appId: "539345816436",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };

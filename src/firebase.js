
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFnonIOMT45oKfpHiKjNbTT3vU7M0LDjA",
  authDomain: "homepage-63476.firebaseapp.com",
  projectId: "homepage-63476",
  storageBucket: "homepage-63476.appspot.com",
  messagingSenderId: "96498149035",
  appId: "1:96498149035:web:c5808c5b2ca249d1fd39ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore (database)
export const db = getFirestore(app);



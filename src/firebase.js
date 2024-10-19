import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFnonIOMT45oKfpHiKjNbTT3vU7M0LDjA",
  authDomain: "homepage-63476.firebaseapp.com",
  projectId: "homepage-63476",
  storageBucket: "homepage-63476.appspot.com",
  messagingSenderId: "96498149035",
  appId: "1:96498149035:web:c23364d79448bacdfd39ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; // Export the app for use in other files
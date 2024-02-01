// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1bGm2ApDcAkY8CG6CKH9UJJMZyIs7UaI",
  authDomain: "kaizoku-bd13e.firebaseapp.com",
  projectId: "kaizoku-bd13e",
  storageBucket: "kaizoku-bd13e.appspot.com",
  messagingSenderId: "358491414048",
  appId: "1:358491414048:web:2c915dce9e2bffeae1a645",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

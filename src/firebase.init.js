// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBnLip1bvvFfBW_Yz9NDtPk6aOUgGhAWhE",
   authDomain: "ema-john-sample1.firebaseapp.com",
   projectId: "ema-john-sample1",
   storageBucket: "ema-john-sample1.appspot.com",
   messagingSenderId: "553404769715",
   appId: "1:553404769715:web:4d0d4b0070a5dedd6a97c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
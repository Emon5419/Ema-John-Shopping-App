// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCvS_9n9zVYAKT8ArdtVVBgq38qV1Xc3Po",
   authDomain: "ema-john-sample-7ec02.firebaseapp.com",
   projectId: "ema-john-sample-7ec02",
   storageBucket: "ema-john-sample-7ec02.appspot.com",
   messagingSenderId: "972423394646",
   appId: "1:972423394646:web:fc467379734fc08b43d2f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
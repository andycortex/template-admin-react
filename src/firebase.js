// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "template-4d3e6.firebaseapp.com",
  projectId: "template-4d3e6",
  storageBucket: "template-4d3e6.appspot.com",
  messagingSenderId: "774894180000",
  appId: "1:774894180000:web:b1344647489d424d0a5bc5",
  measurementId: "G-LGVK01QQRT",
};
console.log(process.env);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2hVbL_wb32HoOfjMGNKMJAqbiIXrGpso",
  authDomain: "netflixgpt-8115f.firebaseapp.com",
  projectId: "netflixgpt-8115f",
  storageBucket: "netflixgpt-8115f.appspot.com",
  messagingSenderId: "768289075235",
  appId: "1:768289075235:web:6691057b0fe20ab47f8196",
  measurementId: "G-79XGFJFJB9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth();

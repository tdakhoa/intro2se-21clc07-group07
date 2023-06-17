// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcYd5VlgKaXz-NRHB-j4zFn10CKehB_qI",
    authDomain: "intro2se-21clc07-group07.firebaseapp.com",
    databaseURL: "https://intro2se-21clc07-group07-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "intro2se-21clc07-group07",
    storageBucket: "intro2se-21clc07-group07.appspot.com",
    messagingSenderId: "929002442453",
    appId: "1:929002442453:web:bb1a3a74f8acae15589c5c",
    measurementId: "G-4YRFSL1PJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage(app);

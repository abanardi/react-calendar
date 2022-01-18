// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCV30HhAKHLhAQO5hZsGZWh3iOpriozY9c",

  authDomain: "calendar-deb8a.firebaseapp.com",

  projectId: "calendar-deb8a",

  storageBucket: "calendar-deb8a.appspot.com",

  messagingSenderId: "883250065760",

  appId: "1:883250065760:web:88a2f780ac04cc315eee05",

  measurementId: "G-KWF6EFHM5J"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db=getFirestore(app);

export {db}
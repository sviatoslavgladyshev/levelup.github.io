import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWXpvIim5vIzo-mMJvojHF5sJ04WgBvSA",
    authDomain: "levelup-65b5b.firebaseapp.com",
    projectId: "levelup-65b5b",
    storageBucket: "levelup-65b5b.appspot.com",
    messagingSenderId: "13469845736",
    appId: "1:13469845736:web:aa4b300ead478eac30215d",
    measurementId: "G-B7HVG7T7VZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, collection, query, where, getDocs } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


// Define the collection and query
const applicationsCollection = collection(firestore, 'application');
const querySnapshot = await getDocs(query(applicationsCollection, where('veteran_status', '!=', null)));

// Iterate over the documents in the query snapshot
querySnapshot.forEach((doc) => {
    // Retrieve the user ID and data for each document
    const userId = doc.id;
    const userData = doc.data();
    
    // Process the retrieved data as needed
    console.log("User ID:", userId);
    console.log("User Data:", userData);
});


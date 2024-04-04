// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const veteranStatusList = document.getElementById('veteranStatusList');

// Function to fetch and display veteran status
function displayVeteranStatus() {
  // Clear previous data
  veteranStatusList.innerHTML = '';

  // Get all documents from the 'application' collection
  const applicationCollectionRef = collection(db, 'application');
  getDocs(applicationCollectionRef).then(querySnapshot => {
    querySnapshot.forEach(doc => {
      const uid = doc.id; // User ID
      const veteranStatusRef = doc.ref.collection('veteran_status').doc(uid); // Reference to user's veteran status document
      
      // Get the veteran status document
      getDoc(veteranStatusRef).then(veteranStatusDoc => {
        if (veteranStatusDoc.exists()) {
          const veteranStatusData = veteranStatusDoc.data();
          const veteranStatus = veteranStatusData.veteran ? 'Veteran' : 'Not a Veteran';

          // Create a list item to display veteran status
          const listItem = document.// Assuming firebase has been initialized already
const db = firebase.firestore();

const veteranStatusList = document.getElementById('veteranStatusList');

// Function to fetch and display veteran status
function displayVeteranStatus() {
  // Clear previous data
  veteranStatusList.innerHTML = '';

  // Get all documents from the 'application' collection
  db.collection('application').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const uid = doc.id; // User ID

      // Reference to user's veteran status document
      const veteranStatusRef = db.collection('application').doc(uid).collection('veteran_status').doc('status');

      // Get the veteran status document
      veteranStatusRef.get().then((veteranStatusDoc) => {
        if (veteranStatusDoc.exists) {
          const veteranStatusData = veteranStatusDoc.data();
          const veteranStatus = veteranStatusData.veteran ? 'Veteran' : 'Not a Veteran';

          // Create a list item to display veteran status
          const listItem = document.createElement('li');
          listItem.textContent = `${uid}: ${veteranStatus}`;
          veteranStatusList.appendChild(listItem);
        } else {
          console.log('No veteran status document found for user:', uid);
        }
      }).catch((error) => {
        console.error('Error getting veteran status document:', error);
      });
    });
  }).catch((error) => {
    console.error('Error getting application documents:', error);
  });
}

// Call the function when the script loads
displayVeteranStatus();
createElement('li');
          listItem.textContent = `${uid}: ${veteranStatus}`;
          veteranStatusList.appendChild(listItem);
        } else {
          console.log('No veteran status document found for user:', uid);
        }
      }).catch(error => {
        console.error('Error getting veteran status document:', error);
      });
    });
  }).catch(error => {
    console.error('Error getting application documents: ', error);
  });
}

// Call the function to display veteran status when the page loads
displayVeteranStatus();
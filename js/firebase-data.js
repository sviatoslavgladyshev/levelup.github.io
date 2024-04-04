import { getFirestore, collection, query, where, getDocs } from "firebase/database";

// Initialize Firebase Firestore
const firestore = getFirestore();

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

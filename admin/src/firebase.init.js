import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTW06EMMJq_nLpCLFYyiagSbygOaNhgsY",
  authDomain: "mern-netflix-64581.firebaseapp.com",
  projectId: "mern-netflix-64581",
  storageBucket: "mern-netflix-64581.appspot.com",
  messagingSenderId: "1083702672498",
  appId: "1:1083702672498:web:82f4d9e559797b0a88d6eb",
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
export default storage;

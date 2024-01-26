// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8VDBvvIyZYMZC6JzWS1GGm-1F2XDazFc",
  authDomain: "dropbox-clone-22a00.firebaseapp.com",
  projectId: "dropbox-clone-22a00",
  storageBucket: "dropbox-clone-22a00.appspot.com",
  messagingSenderId: "218435169759",
  appId: "1:218435169759:web:31ecabc475e5f98678a86a",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

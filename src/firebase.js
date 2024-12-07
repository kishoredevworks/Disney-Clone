import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDn-gEUsxxLtXcMuMg9eJEGAObf5lOe_9k",
  authDomain: "disneyplus-clone-d57bb.firebaseapp.com",
  projectId: "disneyplus-clone-d57bb",
  storageBucket: "disneyplus-clone-d57bb.firebasestorage.app",
  messagingSenderId: "941784231817",
  appId: "1:941784231817:web:c766a73ffbdcd7e7ecfb58",
  measurementId: "G-RX1G2FJ7GK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

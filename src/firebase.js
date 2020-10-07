import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1ZsKZSphYdRVz48aerHaQWROGSdN_s4o",
  authDomain: "clone-8d82d.firebaseapp.com",
  databaseURL: "https://clone-8d82d.firebaseio.com",
  projectId: "clone-8d82d",
  storageBucket: "clone-8d82d.appspot.com",
  messagingSenderId: "373558782505",
  appId: "1:373558782505:web:264e9871c28f297e840a38",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgw4tjADCLv_Ssi0pB14uESCdWy8kqDwY",
  authDomain: "challenge-11612.firebaseapp.com",
  databaseURL: "https://challenge-11612.firebaseio.com",
  projectId: "challenge-11612",
  storageBucket: "challenge-11612.appspot.com",
  messagingSenderId: "1003119226951",
  appId: "1:1003119226951:web:da7d48d99db60522e84162",
  measurementId: "G-906R9FFD34",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

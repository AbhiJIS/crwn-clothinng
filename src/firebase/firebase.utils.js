import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA4YbDNBWfVixoIdqOuwsHY7wFAVK31akY",
  authDomain: "crwn-db-379e4.firebaseapp.com",
  databaseURL: "https://crwn-db-379e4.firebaseio.com",
  projectId: "crwn-db-379e4",
  storageBucket: "crwn-db-379e4.appspot.com",
  messagingSenderId: "342924809781",
  appId: "1:342924809781:web:00822593b35ab6e408037c",
  measurementId: "G-5JL7ZR6DFD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

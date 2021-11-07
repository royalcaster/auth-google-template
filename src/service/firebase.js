import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAKTPCVP3ymu7Ap7VU5fMpi9rhLJCYnbwk",
  authDomain: "bierpingwithme.firebaseapp.com",
  databaseURL: "https://bierpingwithme.firebaseio.com",
  projectId: "bierpingwithme",
  storageBucket: "bierpingwithme.appspot.com",
  messagingSenderId: "320109268528",
  appId: "1:320109268528:web:6f75295a22277da7df67f5",
  measurementId: "G-QHPL8NQDTB"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
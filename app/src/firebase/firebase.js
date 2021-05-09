import firebase from 'firebase/app'
import 'firebase/storage'
import "firebase/auth";
import "firebase/firestore";



const provider = new firebase.auth.GoogleAuthProvider();


// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyA2Q_ogamOcLnJi-zUf2TeRfs96F0wxBNE",
  authDomain: "reno-5291e.firebaseapp.com",
  projectId: "reno-5291e",
  storageBucket: "reno-5291e.appspot.com",
  messagingSenderId: "589210537286",
  appId: "1:589210537286:web:bd9039976062fdc5312947",
  measurementId: "G-9GFFCN9KKP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

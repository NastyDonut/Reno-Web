import firebase from 'firebase/app'
import 'firebase/storage'
import "firebase/auth";
import "firebase/firestore";



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

const provider = new firebase.auth.GoogleAuthProvider();


const auth = firebase.auth();
const firestore = firebase.firestore();
const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};


const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};


const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};


export {
  auth,
  firestore,
  signInWithGoogle,
  generateUserDocument,
  getUserDocument
}


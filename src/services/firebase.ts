import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAB3lc_Ak2Zz3n1UHDpQByBcaJ-HF0q0-I",
  authDomain: "marathontrainer-4e293.firebaseapp.com",
  databaseURL: "https://marathontrainer-4e293.firebaseio.com",
  projectId: "marathontrainer-4e293",
  storageBucket: "marathontrainer-4e293.appspot.com",
  messagingSenderId: "722939687625",
  appId: "1:722939687625:web:6e53af7e36a374d0b5d318",
  measurementId: "G-GL045586F5"
};

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();
export const subscriptionsRef = databaseRef.child('subscriptions');
export default firebase;
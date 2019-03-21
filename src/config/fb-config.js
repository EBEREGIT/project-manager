import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB2HKEA2geY722VzrW3fUMj1gOOmnWO76c",
    authDomain: "ebereplentyapp.firebaseapp.com",
    databaseURL: "https://ebereplentyapp.firebaseio.com",
    projectId: "ebereplentyapp",
    storageBucket: "ebereplentyapp.appspot.com",
    messagingSenderId: "693020938245"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;
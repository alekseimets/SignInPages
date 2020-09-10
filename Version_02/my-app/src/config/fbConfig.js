import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAGVEX52bWHKWbRx5ZZrZ87CU5cjSCvx3s",
    authDomain: "signinpages-37998.firebaseapp.com",
    databaseURL: "https://signinpages-37998.firebaseio.com",
    projectId: "signinpages-37998",
    storageBucket: "signinpages-37998.appspot.com",
    messagingSenderId: "52874718518",
    appId: "1:52874718518:web:7b19b16b7590e944aa5797",
    measurementId: "G-YDY16GXYFH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;
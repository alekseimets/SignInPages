import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyAGVEX52bWHKWbRx5ZZrZ87CU5cjSCvx3s",
  authDomain: "signinpages-37998.firebaseapp.com",
  databaseURL: "https://signinpages-37998.firebaseio.com",
  projectId: "signinpages-37998",
  storageBucket: "signinpages-37998.appspot.com",
  messagingSenderId: "52874718518",
};
firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;

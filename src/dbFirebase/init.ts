import firebase from 'firebase';
import firebaseapp from 'firebase/app';
import firestore from 'firebase/firestore';
// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB32yiiGLUjg9f5SMYB1KW3OiZgIht36Zw",
    authDomain: "kaiserlogin-a1d60.firebaseapp.com",
    databaseURL: "https://kaiserlogin-a1d60.firebaseio.com",
    projectId: "kaiserlogin-a1d60",
    storageBucket: "kaiserlogin-a1d60.appspot.com",
    messagingSenderId: "653473163824",
    appId: "1:653473163824:web:951136d95b542357601bf5"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({});

export default firebaseApp.firestore();

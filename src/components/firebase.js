import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAEFj55E8vWy1hW5YTu2cW8720iP4YSxOo",
    authDomain: "react-chat-app-ff265.firebaseapp.com",
    databaseURL: "https://react-chat-app-ff265.firebaseio.com",
    projectId: "react-chat-app-ff265",
    storageBucket: "react-chat-app-ff265.appspot.com",
    messagingSenderId: "851248951401",
    appId: "1:851248951401:web:e1b599bbfa15038b84f2f8",
    measurementId: "G-GP92B64HLD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
  

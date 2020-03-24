import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBhf143josSDTyb8Xb6XR8ZBJkuciM8No4",
  authDomain: "bt3103-l10.firebaseapp.com",
  databaseURL: "https://bt3103-l10.firebaseio.com",
  projectId: "bt3103-l10",
  storageBucket: "bt3103-l10.appspot.com",
  messagingSenderId: "891228207828",
  appId: "1:891228207828:web:fa4381542baf486266d941",
  measurementId: "G-DK26W3TQG9"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
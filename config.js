import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAf3tmYo-O-rWW9fDT1LuE8eDFzR-cWOvU",
    authDomain: "project-60-2e9b4.firebaseapp.com",
    databaseURL: "https://project-60-2e9b4-default-rtdb.firebaseio.com",
    projectId: "project-60-2e9b4",
    storageBucket: "project-60-2e9b4.appspot.com",
    messagingSenderId: "789224796684",
    appId: "1:789224796684:web:127af9b0c48289049df429",
    measurementId: "G-CJSBDYSTR7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();

 

  
import firebase from 'firebase'                                     
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVSLW_Bvvi5KxGmJeYmxtClNYE2PQwnBE",
    authDomain: "vueshop-e260e.firebaseapp.com",
    databaseURL: "https://vueshop-e260e.firebaseio.com",
    projectId: "vueshop-e260e",
    storageBucket: "vueshop-e260e.appspot.com",
    messagingSenderId: "757564812418",
    appId: "1:757564812418:web:3756a6f0d913b4a731589b",
    measurementId: "G-9SD7BDZ7BS"
  };
  // Initialize Firebase
  
  firebase.analytics();                                      

  export const fb = firebase.initializeApp(firebaseConfig);
import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
   apiKey: "AIzaSyCZltV8jOrzWY0BRP_A4EklZA3ageN52n0",
  authDomain: "projeto-c71-e8405.firebaseapp.com",
  projectId: "projeto-c71-e8405",
  storageBucket: "projeto-c71-e8405.appspot.com",
  messagingSenderId: "708928116167",
  appId: "1:708928116167:web:b443c358f932b289e3f5e2" 
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

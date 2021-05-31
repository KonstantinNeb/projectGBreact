import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbCkpAcbBRNngJSXd5e_G2KvYTsSoI7Ow",
  authDomain: "gb-lesson8.firebaseapp.com",
  databaseURL: "https://gb-lesson8-default-rtdb.firebaseio.com",
  projectId: "gb-lesson8",
  storageBucket: "gb-lesson8.appspot.com",
  messagingSenderId: "265419241159",
  appId: "1:265419241159:web:484ceffcb96baf8dd0f0e2"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

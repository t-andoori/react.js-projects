import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAD8qiYjwz95e2-pUnSZT_X24pPlh_Yawg",
  authDomain: "clone-cb90b.firebaseapp.com",
  databaseURL: "https://clone-cb90b.firebaseio.com",
  projectId: "clone-cb90b",
  storageBucket: "clone-cb90b.appspot.com",
  messagingSenderId: "1017357293029",
  appId: "1:1017357293029:web:061fa82d6fa51a77e8cb0c",
  measurementId: "G-VB8N9YSTJ5",
});

const auth = firebase.auth();

export { auth };

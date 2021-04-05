import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAbKCaGrVfe1Bkv5hUrj5kG64bN25EUoYg",
    authDomain: "slack-clone-ea370.firebaseapp.com",
    projectId: "slack-clone-ea370",
    storageBucket: "slack-clone-ea370.appspot.com",
    messagingSenderId: "975134060459",
    appId: "1:975134060459:web:659bb76f2f89bb37f52cee"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
var microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com');

export { db, auth, googleProvider, microsoftProvider };
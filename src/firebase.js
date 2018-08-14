import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB6nKgfRoqhTNJmXkVhU_iQRNyZUVWKI94",
  authDomain: "chat-app-15ffa.firebaseapp.com",
  databaseURL: "https://chat-app-15ffa.firebaseio.com",
  projectId: "chat-app-15ffa",
  storageBucket: "chat-app-15ffa.appspot.com",
  messagingSenderId: "34562064796"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

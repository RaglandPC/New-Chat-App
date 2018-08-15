import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCe0-YQjJxSyysSj86kVElArgaPUsz3eJ4",
  authDomain: "new-chat-app-da7e3.firebaseapp.com",
  databaseURL: "https://new-chat-app-da7e3.firebaseio.com",
  projectId: "new-chat-app-da7e3",
  storageBucket: "new-chat-app-da7e3.appspot.com",
  messagingSenderId: "320422827939"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

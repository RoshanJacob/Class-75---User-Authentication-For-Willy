import * as firebase from 'firebase';
require('@firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDcbpII1nB6GQSBqJV8nL5gQX-FGC7_CCk',
  authDomain: 'willy-27e4b.firebaseapp.com',
  databaseURL: 'https://willy-27e4b.firebaseio.com',
  projectId: 'willy-27e4b',
  storageBucket: 'willy-27e4b.appspot.com',
  messagingSenderId: '943601807048',
  appId: '1:943601807048:web:06ed65bb5e9b29d2a4fffd',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

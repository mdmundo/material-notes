import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDr8Zix9phP7yKXnd47btENUXyXQvA3Eec',
  authDomain: 'mdmundonotes.firebaseapp.com',
  projectId: 'mdmundonotes',
  storageBucket: 'mdmundonotes.appspot.com',
  messagingSenderId: '1019982159986',
  appId: '1:1019982159986:web:c7098cc516c4fa26faa2eb'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');

const githubProvider = new firebase.auth.GithubAuthProvider();

const twitterProvider = new firebase.auth.TwitterAuthProvider();

export {
  firebase,
  googleProvider,
  githubProvider,
  twitterProvider,
  database as default
};

import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyDr8Zix9phP7yKXnd47btENUXyXQvA3Eec',
  authDomain: 'mdmundonotes.firebaseapp.com',
  projectId: 'mdmundonotes',
  storageBucket: 'mdmundonotes.appspot.com',
  messagingSenderId: '1019982159986',
  appId: '1:1019982159986:web:2da20e8a80ec22ccfaa2eb'
});

const database = firebase.database();

export { firebase, database as default };

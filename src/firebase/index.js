import firebase from 'firebase';

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

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

export { firebase, provider, database as default };

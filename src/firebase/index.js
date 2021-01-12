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

firebase
  .auth()
  .getRedirectResult()
  .then((result) => {
    if (result.credential) {
      // This gives you a Google Access Token.
      const token = result.credential.accessToken;
    }
    const user = result.user;
  });

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

export { firebase, provider, database as default };

import { firebase, provider } from '../firebase';

export const startLogin = () => {
  firebase.auth().signInWithPopup(provider);
};

export const startLogout = () => {
  firebase.auth().signOut();
};

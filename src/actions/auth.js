import { firebase, provider } from '../firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  firebase.auth().signInWithRedirect(provider);
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  firebase.auth().signOut();
};

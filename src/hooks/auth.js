import { useState, useEffect } from 'react';

const useFirebaseAuthentication = (firebase) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });

    return () => {
      unsubscribe();
    };
  }, [firebase]);

  return user;
};

export default useFirebaseAuthentication;

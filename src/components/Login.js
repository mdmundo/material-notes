import Button from '@material-ui/core/Button';
import { firebase, provider } from '../firebase';

const Login = () => {
  return (
    <Button
      variant='contained'
      color='primary'
      onClick={() => {
        firebase.auth().signInWithPopup(provider);
      }}>
      Log in
    </Button>
  );
};

export { Login as default };

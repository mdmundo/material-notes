import Button from '@material-ui/core/Button';
import { firebase } from '../firebase';

const Logout = () => {
  return (
    <Button
      fullWidth
      variant='text'
      color='secondary'
      onClick={() => {
        firebase.auth().signOut();
      }}>
      Log out
    </Button>
  );
};

export { Logout as default };

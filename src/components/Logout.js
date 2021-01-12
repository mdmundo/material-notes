import Button from '@material-ui/core/Button';
import { startLogout } from '../actions/auth';

const Logout = () => {
  return (
    <Button fullWidth variant='text' color='secondary' onClick={startLogout}>
      Log out
    </Button>
  );
};

export { Logout as default };

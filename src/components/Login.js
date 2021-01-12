import Button from '@material-ui/core/Button';
import { startLogin } from '../actions/auth';

const Login = () => {
  return (
    <Button variant='contained' color='primary' onClick={startLogin}>
      Log in
    </Button>
  );
};

export { Login as default };

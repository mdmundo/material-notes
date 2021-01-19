import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { firebase, provider } from '../firebase';

const useStyles = makeStyles((theme) => ({
  login: {
    marginTop: theme.spacing(7)
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Button
      className={classes.login}
      fullWidth
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

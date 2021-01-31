import { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  firebase,
  googleProvider,
  githubProvider,
  twitterProvider
} from '../firebase';
import TwitterIcon from './icons/Twitter';
import GoogleIcon from './icons/Google';
import GithubIcon from './icons/Github';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
  login: {
    marginTop: theme.spacing(7)
  }
}));

const Login = () => {
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  return (
    <>
      <ButtonGroup
        className={classes.login}
        fullWidth={true}
        orientation='vertical'
        variant='text'
        size='large'>
        <Button
          startIcon={<GoogleIcon />}
          onClick={() => {
            firebase
              .auth()
              .signInWithPopup(googleProvider)
              .catch((e) => {
                setError(e.message);
                setOpen(true);
              });
          }}>
          Sign in with Google
        </Button>
        <Button
          startIcon={<TwitterIcon />}
          onClick={() => {
            firebase
              .auth()
              .signInWithPopup(twitterProvider)
              .catch((e) => {
                setError(e.message);
                setOpen(true);
              });
          }}>
          Sign in with Twitter
        </Button>
        <Button
          startIcon={<GithubIcon viewBox='0 0 16 16' />}
          onClick={() => {
            firebase
              .auth()
              .signInWithPopup(githubProvider)
              .catch((e) => {
                setError(e.message);
                setOpen(true);
              });
          }}>
          Sign in with Github
        </Button>
      </ButtonGroup>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        autoHideDuration={4000}
        message={error || 'An error occurred.'}
      />
    </>
  );
};

export { Login as default };

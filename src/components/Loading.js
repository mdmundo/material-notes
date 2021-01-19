import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2)
  },
  progress: {
    display: 'block',
    margin: 'auto'
  }
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <CircularProgress
          className={classes.progress}
          variant='indeterminate'
          size='3.5rem'
        />
      </CardContent>
    </Card>
  );
};

export default Loading;

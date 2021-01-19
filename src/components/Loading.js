import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  progress: {
    display: 'block',
    margin: 'auto'
  },
  card: {
    marginTop: theme.spacing(6)
  },
  title: {
    marginBottom: theme.spacing(3)
  }
}));

const Loading = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          variant='subtitle2'
          display='block'
          align='center'
          gutterBottom>
          {props.text}
        </Typography>
        <CircularProgress
          className={classes.progress}
          variant='indeterminate'
          size='2.2rem'
        />
      </CardContent>
    </Card>
  );
};

export default Loading;

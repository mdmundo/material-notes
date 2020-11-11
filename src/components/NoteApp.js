// import { useEffect, useReducer } from 'react';
// import notesReducer from '../reducers/notes';
// import NoteList from './NoteList';
// import AddNoteForm from './AddNoteForm';
// import NotesContext from '../context/notes-context';

// const NoteApp = () => {
//   const [notes, dispatch] = useReducer(notesReducer, []);

//   useEffect(() => {
//     const notes = JSON.parse(localStorage.getItem('notes'));

//     if (notes) {
//       dispatch({ type: 'POPULATE_NOTES', notes });
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('notes', JSON.stringify(notes));
//   }, [notes]);

//   return (
//     <NotesContext.Provider value={{ notes, dispatch }}>
//       <h1>Notes</h1>
//       <NoteList />
//       <AddNoteForm />
//     </NotesContext.Provider>
//   );
// };

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
}));

const AlignItemsList = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar
            alt='Remy Sharp'
            src='https://randomuser.me/api/portraits/women/10.jpg'
          />
        </ListItemAvatar>
        <ListItemText
          primary='Brunch this weekend?'
          secondary={
            <>
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'>
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar
            alt='Travis Howard'
            src='https://randomuser.me/api/portraits/women/82.jpg'
          />
        </ListItemAvatar>
        <ListItemText
          primary='Summer BBQ'
          secondary={
            <>
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'>
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar
            alt='Cindy Baker'
            src='https://randomuser.me/api/portraits/women/50.jpg'
          />
        </ListItemAvatar>
        <ListItemText
          primary='Oui Oui'
          secondary={
            <>
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'>
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </>
          }
        />
      </ListItem>
    </List>
  );
};

export { AlignItemsList as default };

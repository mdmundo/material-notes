import database from '../firebase';

export const addNote = (note) => ({
  type: 'ADD_NOTE',
  note
});

export const startAddNote = ({ auth }, dispatch, note) => {
  database
    .ref(`users/${auth?.uid}/notes`)
    .push(note)
    .then((ref) => {
      dispatch(
        addNote({
          id: ref.key,
          checked: false,
          ...note
        })
      );
    });
};

export const removeNote = ({ id }) => ({
  type: 'REMOVE_NOTE',
  id
});

export const startRemoveNote = ({ auth }, dispatch, { id }) => {
  database
    .ref(`users/${auth?.uid}/notes/${id}`)
    .remove()
    .then(() => {
      dispatch(removeNote({ id }));
    });
};

export const toggleNote = ({ id, checked }) => ({
  type: 'TOGGLE_NOTE',
  id,
  checked
});

export const startToggleNote = ({ auth }, dispatch, { id, checked }) => {
  database
    .ref(`users/${auth?.uid}/notes/${id}`)
    .update({ checked })
    .then(() => {
      dispatch(toggleNote({ id, checked }));
    });
};

export const setNotes = (notes) => ({
  type: 'SET_NOTES',
  notes
});

export const startSetNotes = ({ auth }, dispatch) => {
  database
    .ref(`users/${auth?.uid}/notes`)
    .once('value')
    .then((snapshot) => {
      const notes = [];
      console.log(`users/${auth?.uid}/notes`);

      snapshot.forEach((childSnapshot) => {
        notes.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setNotes(notes));
    });
};

import database from '../firebase';

export const addNote = (note) => ({
  type: 'ADD_NOTE',
  note
});

export const startAddNote = (dispatch, note) => {
  database
    .ref('notes')
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

export const startRemoveNote = (dispatch, { id }) => {
  database
    .ref(`notes/${id}`)
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

export const startToggleNote = (dispatch, { id, checked }) => {
  database
    .ref(`notes/${id}`)
    .update({ checked })
    .then(() => {
      dispatch(toggleNote({ id, checked }));
    });
};

export const setNotes = (notes) => ({
  type: 'SET_NOTES',
  notes
});

export const startSetNotes = (dispatch) => {
  database
    .ref('notes')
    .once('value')
    .then((snapshot) => {
      const notes = [];

      snapshot.forEach((childSnapshot) => {
        notes.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setNotes(notes));
    });
};

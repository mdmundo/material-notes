import database from '../firebase';

export const addNote = (note) => ({
  type: 'ADD_NOTE',
  note
});

export const startAddNote = (note) => {
  return (dispatch) => {
    return database
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
};

export const removeNote = ({ id }) => ({
  type: 'REMOVE_NOTE',
  id
});

export const startRemoveNote = ({ id }) => {
  return (dispatch) => {
    return database
      .ref(`notes/${id}`)
      .remove()
      .then(() => {
        dispatch(removeNote({ id }));
      });
  };
};

export const toggleNote = ({ id, checked }) => ({
  type: 'TOGGLE_NOTE',
  id,
  checked
});

export const startToggleNote = ({ id, checked }) => {
  return (dispatch) => {
    return database
      .ref(`notes/${id}`)
      .update({ checked })
      .then(() => {
        dispatch(toggleNote({ id, checked }));
      });
  };
};

export const setNotes = (notes) => ({
  type: 'SET_NOTES',
  notes
});

export const startSetNotes = () => {
  return (dispatch) => {
    return database
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
};

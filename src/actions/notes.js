import database from '../firebase';

export const startAddNote = async (note) => {
  await database.ref(`notes`).push(note);
};

export const startRemoveNote = async ({ id }) => {
  await database.ref(`notes/${id}`).remove();
};

export const startToggleNote = async ({ id, checked }) => {
  await database.ref(`notes/${id}`).update({ checked });
};

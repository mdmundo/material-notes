import { v4 as uuidv4 } from 'uuid';

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes;
    case 'ADD_NOTE':
      return [
        ...state,
        { id: uuidv4(), title: action.title, body: action.body }
      ];
    case 'REMOVE_NOTE':
      return state.filter((note) => note.id !== action.id);
    default:
      return state;
  }
};

export { notesReducer as default };

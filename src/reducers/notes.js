const notesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [action.note, ...state];
    case 'REMOVE_NOTE':
      return state.filter((note) => note.id !== action.id);
    case 'TOGGLE_NOTE':
      return state.map((note) =>
        note.id === action.id ? { ...note, checked: action.checked } : note
      );
    case 'SET_NOTES':
      return action.notes;
    default:
      return state;
  }
};

export { notesReducer as default };

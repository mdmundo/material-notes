const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [action.note, ...state.notes] };
    case 'REMOVE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.id)
      };
    case 'TOGGLE_NOTE':
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.id ? { ...note, checked: action.checked } : note
        )
      };
    case 'SET_NOTES':
      return { ...state, notes: action.notes };
    case 'LOGIN':
      return {
        ...state,
        auth: { uid: action.uid }
      };
    case 'LOGOUT':
      return {
        ...state,
        auth: { uid: null }
      };
    default:
      return state;
  }
};

export { appReducer as default };

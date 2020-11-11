import { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_NOTE',
      title,
      body
    });
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <p>Add note</p>
      <form onSubmit={addNote}>
        {'Title: '}
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        {'Body: '}
        <input value={body} onChange={(e) => setBody(e.target.value)}></input>
        <button>Add Note</button>
      </form>
    </div>
  );
};

export { AddNoteForm as default };

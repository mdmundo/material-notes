import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NoteApp from './components/NoteApp';
import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: "rgb(17, 82, 147)",
      light: "rgb(71, 145, 219)",
      main: "#1976d2"
    },
    secondary: {
      dark: "rgb(154, 0, 54)",
      light: "rgb(227, 51, 113)",
      main: "rgb(220, 0, 78)"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NoteApp />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

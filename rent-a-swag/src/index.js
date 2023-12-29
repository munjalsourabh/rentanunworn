import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import {store} from './app/store';
import { Provider } from 'react-redux';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';



const primary = {
  main: '#5aab6e',
  light: '#42a5f5',
  dark: '#1565c0',
  contrastText: '#fff',
};

const theme = createTheme({
  palette: {
    primary,
    secondary: purple,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path='/*' element={<App />} />
            </Routes>
          </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

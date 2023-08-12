import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Global } from 'styles/Global';
import 'modern-normalize/modern-normalize.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <App />
      <Global />
      <ToastContainer autoClose={1500} />
    </BrowserRouter>
  </>
);

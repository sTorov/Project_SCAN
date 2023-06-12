import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "flickity/dist/flickity.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { WebService } from './services/webService';
import { setAuth } from './reducers/repoReducers/accountReducer';

const store = configureStore({
  reducer: reducers
})

store.dispatch(setAuth(WebService.authCheck()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

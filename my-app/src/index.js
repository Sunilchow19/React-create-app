import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Head from './heading';
import Name from './name';
import Career from './career';
import Skill from './skills';
import Hobbies from './hobbies';
import Declaration from './declaration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head/>
    <Name/>
    <Career/>
    <Skill/>
    <Hobbies/>
    <Declaration/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

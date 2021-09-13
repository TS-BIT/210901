import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//import SuperElement from './Components/component';
import App from './Components/App';
//import Datand1 from './Components/Datand1';

ReactDOM.render(
  //<SuperElement name={'Petras'} surname={'Antanas'}></SuperElement>,
  //<Element name={'Labas'} surname={'Antanas'}></Element>,
 <App/>,
  //<Datand1/>,
 document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

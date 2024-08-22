import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Car(props) {
  return <li>I am a {props.brand}</li>
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi']
  return(
    <>
    <h1>Who lives in my Garage?</h1>
    <ul>
      {cars.map((car) => <Car brand = {cars}/>)}
    </ul>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Garage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

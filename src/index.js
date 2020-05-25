import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import * as serviceWorker from '../src/serviceWorker';

ReactDOM.render(
  <App/>,document.getElementById('hello')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



























/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/**
 * Filter app 
 * // products 
const PRODUCTS=[
  {category:"Sports",price:"500.Rs",stocked:true,name:"Bat"},
  {category:"Sports",price:"500.Rs",stocked:false,name:"Ball"},
  {category:"Education",price:"500.Rs",stocked:true,name:"Book"},
  {category:"Education",price:"500.Rs",stocked:false,name:"Pen"},
  {category:"Fitness",price:"500.Rs",stocked:true,name:"Treadmill"},
  {category:"Fitness",price:"500.Rs",stocked:false,name:"Dumble"},
]
 */
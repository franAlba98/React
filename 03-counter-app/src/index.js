import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
//import FirstApp from './FirstApp';
import './index.css';



const divRoot = document.getElementById('root');

//For FirstApp component
//ReactDOM.render( <FirstApp /* greeting="Hi, I'm Francisco" */ /> , divRoot );

//For CounterApp component
ReactDOM.render( <CounterApp value={0} /> , divRoot );

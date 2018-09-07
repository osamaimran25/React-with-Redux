import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


var h1 =React.createElement('h1',null , 'Hello world')


ReactDOM.render(h1, document.getElementById('root'));
registerServiceWorker();

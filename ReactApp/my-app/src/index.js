import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import HelloWorld from './App';
import Method from './Method';

import registerServiceWorker from './registerServiceWorker';


//var h1 =React.createElement('h1',null , 'Hello world')


ReactDOM.render(
<div>

  <HelloWorld link='http://www.google.com' linkText="Google"/>
  <HelloWorld link='http://www.Facebook.com' linkText="Facebook"/>
  <HelloWorld link='http://www.gmail.com' linkText="Gmail"/>
<Method/>
</div>

,  document.getElementById('root'));
registerServiceWorker();

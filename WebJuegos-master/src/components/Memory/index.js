import React from 'react';
import ReactDOM from 'react-dom';
import './Index/index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker'; //necesario para react
//import '../../../node_modules/font-awesome/css/font-awesome.css'; //importamos librearia para iconos de las cartas

ReactDOM.render(
<App />, 
document.getElementById('root')
);

serviceWorker.unregister();

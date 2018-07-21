import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import Home from './components/Home';
import registerServiceWorker from './config/registerServiceWorker';
import Routes from "./config/Routes";

ReactDOM.render(<Routes><Home/></Routes>, document.getElementById('root'));
registerServiceWorker();

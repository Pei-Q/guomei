import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/base.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router-dom';

ReactDOM.render(<App />,
 document.getElementById('root'));


registerServiceWorker();

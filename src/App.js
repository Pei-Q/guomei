import React, { Component } from 'react';
import './App.css';
import Classify from './pages/classfy';
import Goodslist from './pages/goodslist';
import Details from './pages/details';

import {Router, Route, hashHistory, Link, IndexRoute, browserHistory,BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (

        <BrowserRouter history={BrowserRouter.hashHistory}>

            <div>
                  <Route  exact path="/classify"  component={Classify} />
                  <Route  path="/goodslist"  component={Goodslist} />
                  <Route  path="/details"  component={Details} />
            </div>
            
        </BrowserRouter>
    )
  }
}

export default App;

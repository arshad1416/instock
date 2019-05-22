import React, { Component } from 'react';
import './Styles/App.scss';
import main from './components/main/main';
import navbar from './components/navbar/navbar';
import warehouses from './components/warehouses/warehouses';
import inventory from './components/inventory/inventory';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './components/error/error';

class App extends Component {
  render (){
    return (
      <BrowserRouter>
            <navbar />
          <Switch>
            <Route path="/" exact component={main} />
            <Route path="/warhouses" component={warehouses} />
            <Route path="/inventory" component={inventory} />
            <Route path="/warehouses/:id" component={warehouses} />
            <Route path="/inventory/:id" component={inventory} />
            <Route component={Error} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
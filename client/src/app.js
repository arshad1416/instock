import React, { Component } from 'react';
import './App.scss';
import Main from './components/main/main';
import Navbar from './components/navbar/navbar';
import Warehouses from './components/warehouses/warehouses';
import Inventory from './components/inventory/inventory';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './components/error/error';

class App extends Component {
  render (){
    return (
      <BrowserRouter>
            <Navbar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/warehouses" component={Warehouses} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/warehouses/:id" component={Warehouses} />
            <Route path="/inventory/:id" component={Inventory} />
            <Route component={Error} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
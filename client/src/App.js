import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Warehouses from './components/warehouses/warehouses';
import Inventory from './components/inventory/inventory';
import Details from './components/inventory/details';
import WarehouseInventory from './components/inventory/warehouse-inventory';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './components/error/error';

class App extends Component {
  render (){
    return (
      <BrowserRouter>
            <Navbar />
          <Switch>
            <Route path="/" exact component={Inventory} />
            <Route exact path="/warehouses" component={Warehouses} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/warehouses/:id" component={Warehouses} />
            <Route path="/warehouses/:id/inventory" component={WarehouseInventory} />
            <Route path="/inventory/:id" component={Details} />
            <Route component={Error} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react'
import axios from 'axios';
import InventoryHeading from './inventoryHeading';
import InventoryItem from './inventoryItem';
import './inventory.scss';

class WarehouseInventory extends Component {
    state= {
        inventory: [],
        id: ''
    };

   
    
    componentDidMount(){
        const { match: { params } } = this.props;

        axios.get(`http://localhost:8080/warehouses/${params.id}/inventory`).then(res => {
            this.setState(() => ({inventory: res.data, id: params.id})); 
        })};

    isolateWarehouse(){

    }
    render() {
        console.log(this.state.inventory)
        return (
            <>
            <InventoryHeading warehouseId={this.state.id} />
            <InventoryItem inventory={this.state.inventory} />
            </>
        )
    }
}

export default WarehouseInventory;

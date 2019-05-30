import React, { Component } from 'react'
import InventoryHeading from './inventoryHeading';
import InventoryItem from './inventoryItem';
import AddItem from './addItem';
import axios from 'axios';

class inventory extends Component {
    state= {
        inventory: []
    };
    
    componentDidMount(){
        axios.get('http://localhost:8080/inventory').then(res => {
            this.setState(() => ({inventory: res.data})); 
        })};
    render() {
        return (
            <div>
                <InventoryHeading />
                <InventoryItem />
                <AddItem />
                <InventoryItem inventory={this.state.inventory} />
            </div>
        )
    }
}

export default inventory

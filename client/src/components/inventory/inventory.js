import React, { Component } from 'react'
import InventoryHeading from './inventoryHeading';
import InventoryItem from './inventoryItem';
import AddItem from './addItem';

class inventory extends Component {
    render() {
        return (
            <div>
                <InventoryHeading />
                <InventoryItem />
                <AddItem />
            </div>
        )
    }
}

export default inventory

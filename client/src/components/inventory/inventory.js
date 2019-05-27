import React, { Component } from 'react'
import InventoryHeading from './inventoryHeading';
import InventoryItem from './inventoryItem';

class inventory extends Component {
    render() {
        return (
            <div>
                <InventoryHeading />
                <InventoryItem />
            </div>
        )
    }
}

export default inventory

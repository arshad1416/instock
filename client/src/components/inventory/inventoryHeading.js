import React, { Component } from 'react';
import './inventory.scss';

class inventoryHeading extends Component {
    render() {
        return (
            <div>
                <h2>Inventory</h2>
                <input type="text" placeholder="Search"/> 
            </div>
        )
    }
}

export default inventoryHeading

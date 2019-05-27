import React, { Component } from 'react';
import './inventory.scss';

class InventoryHeading extends Component {
    render() {
        return (
            <>
            <div className="heading">
                <h1 className="heading__title">Inventory</h1>
                <input className="heading__search" type="text" placeholder="Search"/>
            </div>
            <div className="heading__label-wrap">
                <h4 className="heading__label heading__label-item">ITEM</h4> 
                <h4 className="heading__label heading__label-specifics">LAST ORDERED</h4>
                <h4 className="heading__label heading__label-specifics">LOCATION</h4>
                <h4 className="heading__label heading__label-specifics">QUANTITY</h4>
                <h4 className="heading__label heading__label-specifics">STATUS</h4>
            </div>
            </>
        )
    }
}

export default InventoryHeading

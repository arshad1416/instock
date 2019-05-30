import React, { Component } from 'react';
import './inventory.scss';
import searchIcon from '../../assets/svg/Icon-search.svg';

class InventoryHeading extends Component {
    render() {
        return (
            <>
            <div className="inventory">
                <div className="inventory__header--tablet">
                        <h1 className="inventory__header">{this.props.warehouseId ? `Inventory at ${this.props.warehouseId}` : 'Inventory'}</h1>
                        <form className="inventory__search-container">
                            <button className="inventory__search-container__button" type="submit"><img className="locations__search-container__icon" src ={searchIcon} alt="S"/></button>
                            <input type="text" className="inventory__search-container__bar" placeholder="Search" name="search"></input>
                        </form>
                </div>
            </div>
            <div className="heading__label-wrap">
                <h4 className="heading__label heading__label-item">ITEM</h4> 
                <h4 className="heading__label heading__label-specifics last">LAST ORDERED</h4>
                <h4 className="heading__label heading__label-specifics loc">LOCATION</h4>
                <h4 className="heading__label heading__label-specifics qua">QUANTITY</h4>
                <h4 className="heading__label heading__label-specifics stat">STATUS</h4>
            </div>
            </>
        )
    }
}

export default InventoryHeading

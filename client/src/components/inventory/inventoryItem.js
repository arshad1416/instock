import React, {Component} from 'react';
import './inventory.scss';
import axios from 'axios';
import kebab from '../../assets/svg/Icon-kebab-default.svg';

class InventoryItem extends Component {
    state= {
        inventory: []
    };

    componentDidMount(){
    axios.get('http://localhost:8080/inventory').then(res => {
        this.setState(() => ({inventory: res.data})); 
    })};

    render() {
        return this.state.inventory.map(item =>(
            <div className="item">
                <div className="item__label-button-wrap">
                    <h4 className="item__label">ITEM</h4>
                    <img className="item__button-mobile" src={kebab} alt="remove-button"/>
                </div>
                <div className="item__item-description-wrap">
                    <p className="item__name">{item.name}</p>
                    <p className="item__info">{item.description}</p>
                </div>
                <h4 className="item__label">LAST ORDERED</h4>
                <p className="item__info item__info-desktop">{item.lastOrdered}</p>
                <h4 className="item__label">LOCATION</h4>
                <p className="item__info item__info-desktop">{item.location}</p>
                <h4 className="item__label">QUANTITY</h4>
                <p className="item__info item__info-desktop">{item.quantity}</p>
                <h4 className="item__label">STATUS</h4>
                <p className="item__info item__info-status">{/*item.isInStock*/}In Stock</p>
                <img className="item__button-tablet" src={kebab} alt="remove button"/>
            </div>
        ));
    }
}

export default InventoryItem;

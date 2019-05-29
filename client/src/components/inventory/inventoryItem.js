import React, {Component} from 'react';
import './inventory.scss';
import kebab from '../../assets/svg/Icon-kebab-default.svg';
import {Link} from 'react-router-dom';

class InventoryItem extends Component {
    
    render() {
        return this.props.inventory.map(item =>(
            <div className="item">
                <div className="item__label-button-wrap">
                    <h4 className="item__label">ITEM</h4>
                    <img className="item__button-mobile" src={kebab} alt="remove-button"/>
                </div>
                <div className="item__item-description-wrap">
                    <Link to={`/inventory/${item.id}`} ><p className="item__name">{item.name}</p></Link>
                    <p className="item__info">{item.description}</p>
                </div>
                <h4 className="item__label">LAST ORDERED</h4>
                <p className="item__info item__info-desktop">{item.lastOrdered}</p>
                <h4 className="item__label">LOCATION</h4>
                <p className="item__info item__info-desktop">{item.location}</p>
                <h4 className="item__label">QUANTITY</h4>
                <p className="item__info item__info-desktop">{item.quantity}</p>
                <h4 className="item__label">STATUS</h4>
                <p className="item__info item__info-status">{item.isInstock ? 'In Stock': 'Out of Stock'}</p>
                <img className="item__button-tablet" src={kebab} alt="remove button"/>
            </div>
        ));
    }
}

export default InventoryItem;

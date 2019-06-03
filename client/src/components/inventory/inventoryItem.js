import React, {Component} from 'react';
import './inventory.scss';
// import kebab from '../../assets/svg/Icon-kebab-default.svg';
// import {Link} from 'react-router-dom';
import InventoryItemList from './inventoryItemList';

class InventoryItem extends Component {
    
    render() {
        return this.props.inventory.map(item =>(
            <InventoryItemList item={item} key={item.id} clickOut={this.props.clickOutside} activeKebobId={this.props.activeKebobId} disable={this.props.disable} handleKebob={this.props.handleKebob} Delete={this.props.Delete}/>
        ));
    }
}

export default InventoryItem;

import React, {Component} from 'react';
import './inventory.scss';
import axios from 'axios';
import InventoryItemList from './inventoryItemList';
const uuidv1 = require('uuid/v1');

class InventoryItem extends Component {
    state= {
        inventory: [],                      
    };

    componentDidMount(){    
       this.getInventory();     
    }

    getInventory = () => {
        axios.get('http://localhost:8080/inventory')
             .then(res => {
                this.setState(() => ({inventory: res.data}));                 
                })
            .catch(error => {
                console.log(error);
            });    
    }
    
    delete = (id) => { 
        axios.delete(`http://localhost:8080/inventory/delete/${id}`)
             .then(response => {
                    this.getInventory();                    
             })
             .catch(error => {
                 console.log(error);
             })                            
    }

    render() {        
        return this.state.inventory.map((item)=>(            
            <InventoryItemList key={uuidv1()} item={item} activeKebobId={this.props.activeKebobId} disable={this.props.disable} handleKebob={this.props.handleKebob} Delete={this.delete} clickOut={this.props.clickOutside}/>
        ));
    }
}

export default InventoryItem;



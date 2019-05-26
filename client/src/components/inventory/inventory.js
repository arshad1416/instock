import React, {Component} from 'react';
import './inventory.scss';
import axios from 'axios';

class Inventory extends Component {
    state= {
        inventory: []
    };

    componentDidMount(){
    axios.get('http://localhost:8080/inventory').then(res => {
        this.setState(() => ({inventory: res.data})); 
    })};

    render() {
        return this.state.inventory.map(item =>(
            <div>
                <p>ITEM</p>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>LAST ORDERED</p>
                <p>{item.lastOrdered}</p>
                <p>LOCATION</p>
                <p>{item.location}</p>
                <p>QUANTITY</p>
                <p>{item.quantity}</p>
                <p>STATUS</p>
                <p>{item.isInStock}</p>
            </div>
        ));
    }
}

export default Inventory;

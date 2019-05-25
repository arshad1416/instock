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
    })
    console.log(this.state.inventory);
    };

    render() {
        return (
            
        )
    }
}

export default Inventory;
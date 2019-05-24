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
        return this.state.map(item =>(
            <div>
                <h2>Inventory</h2>
                <input type="text" placeholder="Search"/>
                <p>{item}</p>
            </div>
        ));
    }
}

export default Inventory;
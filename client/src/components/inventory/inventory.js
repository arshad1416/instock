import React, {Component} from 'react';
import './inventory.scss';

class Inventory extends Component {
            componentDidMount(){
                axios.get('http://localhost:8080/inventory').then(res => {
                    this.setState(() => ({inventory: res.data})); 
                })};
            
                render() {
                    return this.state.map(item =>(
                        <div>
                            <h2>Inventory</h2>
                            <input type="text" placeholder="Search"/>
                            <p>{item.}</p>
                        </div>
        );
    }
}

export default Inventory;
import React, { Component } from 'react'
import InventoryHeading from './inventoryHeading';
import InventoryItem from './inventoryItem';

class inventory extends Component {
    state = {
        display: false,
        id: '',
        disable: false,
    }


    handleOutsideClick = (event) => {                    
        this.setState({
            display: event.target.className.includes("item__button-") ? true : false            
        });        
    }

    handleKebob = (event) => {        
        this.setState({
            id: event.target.id, 
            disable: !this.state.disable,            
        });                       
    }


    render() {        
        return (
            <div onClick={this.handleOutsideClick} >
                <InventoryHeading />
                <InventoryItem clickOutside={this.state.display} activeKebobId={this.state.id} disable={this.state.disable} handleKebob={this.handleKebob}/>
            </div>
        )
    }
}

export default inventory

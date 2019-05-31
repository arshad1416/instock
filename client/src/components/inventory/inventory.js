import React, { Component } from 'react'
import InventoryHeading from './inventoryHeading';
import InventoryItem from './inventoryItem';
import axios from 'axios';

class inventory extends Component {
    state = {
        display: false,
        id: '',
        disable: false,
    }

    handleOutsideClick = (event) => {         
        if(event.target.className.includes("item__button-"))
        {            
            this.setState({display: true});
        }
        else
        {
            this.setState({display: false, id:'', disable:false});
        }               
    }

    handleKebob = (event) => {                
        if(!this.state.disable)
        {
            this.setState({
                id: event.target.id, 
                disable: true, 
                display: true           
            });
        }  
        else{
            this.setState({
                id: '', 
                disable: false,  
                display: false          
            });            
        }    
                              
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

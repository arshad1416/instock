import React, { Component } from 'react'
import axios from 'axios';
import InventoryHeading from './inventoryHeading';
import InventoryItem from './inventoryItem';
import './inventory.scss';

class WarehouseInventory extends Component {
    state= {
        inventory: [],
        warehouseId: '',
        id: '',
        display: false,        
        disable: false,
        isOpen: false,
        hideLocations: false,
        clicked: false
    };

   
    
    componentDidMount(){        
        const { match: { params } } = this.props;
        this.getInventoryId(params.id);
     };


    getInventoryId = (id) => {
        axios.get(`http://localhost:8080/warehouses/${id}/inventory`)
        .then(res => {
            this.setState(() => ({inventory: res.data, warehouseId: id})); 
        })
        .catch(error => {console.log(error);});
    }

    
        toggleModal = () => {
            this.setState({
                isOpen: !this.state.isOpen,
                hideLocations: !this.state.hideLocations,
                clicked: true
            });
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
    
        Delete = (id) => {            
            axios.delete(`http://localhost:8080/inventory/delete/${id}`)
                .then(res => {                        
                        this.getInventoryId(this.state.warehouseId);
                })
                .catch(error => {console.log(error);});
        }    

    isolateWarehouse(){

    }
    render() {        
        return (
            <div onClick={this.handleOutsideClick}>
            <InventoryHeading warehouseId={this.state.warehouseId} />
            <InventoryItem inventory={this.state.inventory} clickOutside={this.state.display} activeKebobId={this.state.id} disable={this.state.disable} handleKebob={this.handleKebob} Delete={this.Delete}/>
            </div>
        )
    }
}

export default WarehouseInventory;

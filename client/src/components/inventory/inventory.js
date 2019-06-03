import React, {Component} from 'react';
import './inventory.scss';
import addIcon from '../../assets/svg/Icon-add.svg';
import InventoryModal from '../inventoryModal/inventoryModal';
import InventoryItem from './inventoryItem';
import InventoryHeading from './inventoryHeading';

class Inventory extends Component {
    state = {
        display: false,
        id: '',
        disable: false,
        isOpen: false,
        hideLocations: false,
        clicked: false
    }

    componentDidUpdate() {
        if(this.state.clicked){
            if(window.innerWidth>767){
                this.setState({hideLocations:false, clicked:false})
            }
        }
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

    render() {          
        return (
            <div onClick={this.handleOutsideClick} >
                <InventoryModal show={this.state.isOpen} onClose={this.toggleModal} />
                <InventoryHeading />
                <InventoryItem clickOutside={this.state.display} activeKebobId={this.state.id} disable={this.state.disable} handleKebob={this.handleKebob}/>
                <button className="warehouse__addButton" type="button"
                    onClick={this.toggleModal}>
                    <img src={addIcon} alt="Plus Sign" className="warehouse__plusSign" />
                </button>
            </div>
        )
    }
}        
export default Inventory;
import React, {Component} from 'react';
import './inventory.scss';
import axios from 'axios';
import addIcon from '../../assets/svg/Icon-add.svg';
import InventoryModal from '../inventoryModal/inventoryModal';
import InventoryItem from './inventoryItem';
import InventoryHeading from './inventoryHeading';

class Inventory extends Component {
    state = {
        inventory: [], 
        isOpen: false,
        hideLocations: false,
        clicked: false
    };

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            hideLocations: !this.state.hideLocations,
            clicked: true
        });
    }
    
    componentDidMount(){
        axios.get('http://localhost:8080/inventory')
            .then( response => {
                this.setState({inventory: response.data})
                console.log(this.state.inventory)
        }) 
    }

    componentDidUpdate() {
        if(this.state.clicked){
            if(window.innerWidth>767){
                this.setState({hideLocations:false, clicked:false})
            }
        }
    }

    render() {
        // const style = this.state.hideLocations ? {display: 'none'} : {};

        return (
            <>
            <InventoryModal show={this.state.isOpen} onClose={this.toggleModal} />
            <InventoryHeading />
            <InventoryItem inventory={this.state.inventory}/>
                <button className="warehouse__addButton" type="button"
                    onClick={this.toggleModal}>
                    <img src={addIcon} alt="Plus Sign" className="warehouse__plusSign" />
                </button>
            </>
        );
    }
}

export default Inventory;


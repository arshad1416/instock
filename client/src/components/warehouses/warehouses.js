import React, {Component} from 'react';
import searchIcon from '../../assets/svg/Icon-search.svg';
import './warehouses.scss';
import WarehouseItem from '../WarehouseItem/WarehouseItem';
import axios from 'axios';
import addIcon from '../../assets/svg/Icon-add.svg';
import Warehousemodal from '../warehousemodal/warehousemodal';

class Warehouses extends Component {
    state = {
        warehouses: [], 
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
        axios.get('http://localhost:8080/warehouses')
            .then( response => {
                this.setState({warehouses: response.data})
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
        const style = this.state.hideLocations ? {display: 'none'} : {};

        return (
            <>
            <Warehousemodal show={this.state.isOpen} onClose={this.toggleModal} />
            <section className="locations" style = {style}>
                <div className="locations__header--tablet">
                    <h1 className="locations__header">Locations</h1>
                    <form className="locations__search-container">
                        <button className="locations__search-container__button" type="submit"><img className="locations__search-container__icon" src ={searchIcon} alt="S"/></button>
                        <input type="text" className="locations__search-container__bar" placeholder="Search" name="search"></input>
                    </form>
                </div>
                <section className="warehouse-items">
                    {this.state.warehouses.map((item, index) => {
                        const {id,name,inventoryCategories} = item;
                        const {street, suiteNum, city, province, postal} = item.address;
                        const {title, phone, email} = item.contact;
                        return (
                        <WarehouseItem 
                                index={index}
                                key={id}
                                id={id}
                                name={name}
                                street={street}
                                suiteNum={suiteNum}
                                city={city}
                                province={province}
                                postal={postal}
                                contactName={item.contact.name}
                                title={title}
                                phone={phone}
                                email={email}
                                categories={inventoryCategories}></WarehouseItem>)
                    })}
                </section>
                    <button className="warehouse__addButton" type="button"
                        onClick={this.toggleModal}
                    >
                        <img src={addIcon} alt="Plus Sign" className="warehouse__plusSign" />
                    </button>
            </section>
            </>
        );
    }
}

export default Warehouses

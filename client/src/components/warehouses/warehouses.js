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
        isOpen: false
    };

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    componentDidMount(){
        axios.get('http://localhost:8080/warehouses')
            .then( response => {
                this.setState({warehouses: response.data})
                console.log(this.state.warehouses)
        }) 
    }

    render() {
        return (
            <section className="locations">
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
                    <Warehousemodal show={this.state.isOpen}
                    onClose={this.toggleModal}>Test</Warehousemodal>
            </section>
        );
    }
}

export default Warehouses

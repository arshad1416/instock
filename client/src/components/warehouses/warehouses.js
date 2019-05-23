import React, {Component} from 'react';
import searchIcon from '../../assets/svg/Icon-search.svg';
import './warehouses.scss';
import WarehouseItem from '../WarehouseItem/WarehouseItem';
import axios from 'axios';

class Warehouse extends Component {
    state = {
        warehouses: []
    };
    componentDidMount(){
        axios.get('http//localhost:8080/warehouses')
            .then( response => {
                this.setState({warehouse: response.data})
                console.log(this.state.warehouses)
        }) 
    }
    render() {
        return (
            <section className="locations">
                <h1 className="locations__header">Locations</h1>
                <form className="locations__search-container">
                    <button className="locations__search-container__button" type="submit"><img className="locations__search-container__icon" src ={searchIcon} alt="S"/></button>
                    <input type="text" className="locations__search-container__bar" placeholder="Search" name="search"></input>
                </form>
                <section className="warehouse-items">
                    <WarehouseItem></WarehouseItem>
                    <WarehouseItem></WarehouseItem>
                </section>
            
            </section>
               
        );
    }
}

export default Warehouse;
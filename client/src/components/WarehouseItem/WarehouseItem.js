import React, {Component} from 'react';
import './warehouseItem.scss'

class WarehouseItem extends Component {
    render() {
        return (
            <section className="warehouseItem">
                <h2 className="warehouseItem__header">Warehouse1</h2>
                <div className="warehouseItem__adress">432 King Street, Toronto, ON</div>
                <div className="warehouseItem__name">Sarah Blaha</div>
                <div className="warehouseItem__title">Manager</div>
                <div className="warehouseItem__phone">416 555 5555</div>
                <div className="warehouseItem__email">sasha@sasha.com</div>
                <div className="warehouseItem__categories">blala,blvlad,asdasdad,asdasdasd,asdasdasd,asdasdas</div>
            </section>
               
        );
    }
}

export default WarehouseItem;
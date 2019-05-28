import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './warehouseItem.scss'
import rightArrow from '../../assets/svg/Icon-arrow-right.svg'
class WarehouseItem extends Component {
    render() {
        const address = `${this.props.street}, ${this.props.city}, ${this.props.province}`
        return (
            <section className="warehouseItem">
                {this.props.index===0 ? <div className="warehouseItem__labels">
                    <h1 className="warehouseItem__labels__warehouse">WAREHOUSE</h1>
                    <h1 className="warehouseItem__labels__contact">CONTACT</h1>
                    <h1 className="warehouseItem__labels__info">CONTACT INFORMATION</h1>
                    <h1 className="warehouseItem__labels__categories">CATEGORIES</h1>
                </div> : null}
                <div className="warehouseItem--desk">
                <div className="warehouseItem__header--flexRow">
                    <div className="warehouseItem__header--desk">
                        <h2 className="warehouseItem__header">{this.props.name}</h2>
                        <div className="warehouseItem__adress">{address}</div>
                    </div>
                    <Link to={'/warehouses/' + this.props.id +'/inventory'} ><button className="warehouseItem__button"><img src={rightArrow} alt="inventory"/></button></Link>
                </div>
                <div className="warehouseItem--tablet">
                    <div>
                        <div className="warehouseItem__name">{this.props.contactName}</div>
                        <div className="warehouseItem__title">{this.props.title}</div>
                    </div>
                    <div>
                        <div className="warehouseItem__phone">{this.props.phone}</div>
                        <div className="warehouseItem__email">{this.props.email}</div>
                    </div>
                    <div className="warehouseItem__categories">{this.props.categories}</div>
                    <Link to={'/warehouses/' + this.props.id +'/inventory'} ><button className="warehouseItem__button2"><img src={rightArrow} alt="inventory"/></button></Link>
                </div>
                </div>
            </section>
               
        );
    }
}

export default WarehouseItem;
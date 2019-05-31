import React, { Component } from 'react'
import axios from 'axios';
import Switch from 'react-switch';
import './inventoryModal.scss';

class InventoryModal extends Component {

    state ={
        name:'',
        address:'',
        city:'',
        province: 'Ontario',
        contactName:'',
        position:'',
        phone:'',
        email:'',
        inventoryCategories:''
    }

    newWarehouse = () => {
        const name = this.state.name;
        const address = this.state.address.street;
        const city = this.state.address.city;
        const province = this.state.address.province;
        const contactName = this.state.contact.name;
        const position = this.state.contact.title;
        const phone = this.state.contact.phone;
        const email = this.state.contact.email;
        const inventoryCategories = this.state.inventoryCategories;

    axios
        .post(`http://localhost:8080/videos/upload`, {name, address, city, province, contactName, position, phone, email, inventoryCategories})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    handleSubmit = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {

        if(!this.props.show) {
            return null;
        }

        return (
            <main className="background">
                <section className="warehouseModal warehouseModal__backDrop">
                    <form className="warehouseModal__form" onClick={this.handleSubmit} >
                        <h1 className="warehouseModal__title">
                            Create New
                        </h1>
                        <section className="warehouseModal__spacing warehouseModal__warehouse">
                            <h2 className="warehouseModal__fieldTitle" htmlFor="warehouse">
                                product
                            </h2>
                            <input type="text" className="warehouseModal__field" name="warehouse" placeholder="Item Name" required value={this.state.name} onClick={this.handleSubmit} />
                        </section>
                        <div className="warehouseModal__tabletMode">
                            <section className="warehouseModal__spacing warehouseModal__address warehouseModal__marginRight">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="address">
                                    last ordered
                                </h2>
                                <input type="text" className="warehouseModal__field" name="address" placeholder="yyyy-mm-dd" required value={this.state.address} onClick={this.handleSubmit}/>
                            </section>
                            <section className="warehouseModal__spacing warehouseModal__contactName warehouseModal__marginRight">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="contactName">
                                    city
                                </h2>
                                <input type="text" className="warehouseModal__field" name="contactName" placeholder="City" required value={this.state.contactName} onClick={this.handleSubmit}/>
                            </section>
                            <section className="warehouseModal__spacing warehouseModal__location">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="location">
                                    country
                                </h2>
                                <select className="warehouseModal__field warehouseModal__dropDown" name="location" value={this.state.city} onClick={this.handleSubmit}>
                                    <option value="Toronto">Canada</option>
                                    <option value="Mississauga">USA</option>
                                    <option value="Brampton">Mexico</option>
                                    <option value="Caledon">Sweden</option>
                                    <option value="Pickering">Durian Land</option>
                                </select>
                            </section>
                        </div>
                        <div className="warehouseModal__tabletMode">
                            <section className="warehouseModal__spacing warehouseModal__position">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="position">
                                    quantity
                                </h2>
                                <input type="text" className="warehouseModal__field" name="position" placeholder="0" required value={this.state.title} onClick={this.handleSubmit}/>
                            </section>
                        </div>
                        <div className="warehouseModal__tabletMode">
                            <section className="warehouseModal__spacing warehouseModal__phoneNumber warehouseModal__marginRight">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="phoneNumber">
                                    status
                                </h2>
                                <Switch />
                            </section>
                        </div>
                        <section className="warehouseModal__spacing warehouseModal__itemDescription">
                            <h2 className="warehouseModal__fieldTitle" htmlFor="itemDescription">
                                item description
                            </h2>
                            <textarea type="text" className="warehouseModal__field warehouseModal__textArea" name="itemDescription" placeholder="(Optional)" required value={this.state.inventoryCategories} onClick={this.handleSubmit}/>
                        </section>
                        <section className="warehouseModal__buttons">
                            <button className="warehouseModal__buttonSave" onClick={this.handleSubmit}>
                                save
                            </button>
                            <button className="warehouseModal__buttonCancel" onClick={this.props.onClose}>
                                cancel
                            </button>
                        </section>
                    </form>
                </section>
            </main>
        );
    }
}

export default InventoryModal;
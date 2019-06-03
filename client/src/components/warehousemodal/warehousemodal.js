import React, {Component} from 'react';
import Axios from 'axios';
import shortid from 'shortid';
import '../warehousemodal/warehousemodal.scss';

class Warehousemodal extends Component {

    state ={
        id: '',
        name:'',
        address:{
            street: '', 
            suiteNum:'', 
            city:'', 
            province: 'Ontario',
            postal:''},
        contact: {
            name:'',
            title:'',
            phone:'',
            email:''
        },
        inventoryCategories:'',
    }

    handleSubmit = (event) => {
        event.preventDefault ();

        const formData = {
            id: shortid.generate(),
            name: event.target.name.value,
            address:{
                street: event.target.address.value, 
                city: event.target.city.value, 
                province: 'Ontario'},
            contact: {
                name: event.target.contactName.value,
                title: event.target.position.value,
                phone: event.target.phone.value,
                email: event.target.email.value
            },
            inventoryCategories: event.target.inventoryCategories.value
        };

        Axios
            .post (`http://localhost:8080/newwarehouses`, formData)
            .then ((response) => {
                console.log(response);
            });
            this.props.onClose();
        };

    render() {

        if(!this.props.show) {
            return null;
        }

        return (
            <main className="background">
                <section className="warehouseModal warehouseModal__backDrop">
                    <form className="warehouseModal__form" onSubmit={this.handleSubmit}>
                        <h1 className="warehouseModal__title">
                            Add New
                        </h1>
                        <section className="warehouseModal__spacing warehouseModal__warehouse">
                            <h2 className="warehouseModal__fieldTitle" htmlFor="warehouse">
                                warehouse
                            </h2>
                            <input type="text" className="warehouseModal__field" name="name" placeholder="Name & ID" required />
                        </section>
                        <div className="warehouseModal__tabletMode">
                            <section className="warehouseModal__spacing warehouseModal__address warehouseModal__marginRight">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="address">
                                    address
                                </h2>
                                <input type="text" className="warehouseModal__field" name="address" placeholder="Enter Address" required/>
                            </section>
                            <section className="warehouseModal__spacing warehouseModal__location">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="location">
                                    location
                                </h2>
                                <select className="warehouseModal__field warehouseModal__dropDown" name="city">
                                    <option value="Toronto">Toronto, ON</option>
                                    <option value="Mississauga">Mississauga, ON</option>
                                    <option value="Brampton">Brampton, ON</option>
                                    <option value="Caledon">Caledon, ON</option>
                                    <option value="Pickering">Pickering, ON</option>
                                </select>
                            </section>
                        </div>
                        <div className="warehouseModal__tabletMode">
                            <section className="warehouseModal__spacing warehouseModal__contactName warehouseModal__marginRight">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="contactName">
                                    contact name
                                </h2>
                                <input type="text" className="warehouseModal__field" name="contactName" placeholder="Enter Name" required/>
                            </section>
                            <section className="warehouseModal__spacing warehouseModal__position">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="position">
                                    position
                                </h2>
                                <input type="text" className="warehouseModal__field" name="position" placeholder="Enter Position" required/>
                            </section>
                        </div>
                        <div className="warehouseModal__tabletMode">
                            <section className="warehouseModal__spacing warehouseModal__phoneNumber warehouseModal__marginRight">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="phoneNumber">
                                    phone number
                                </h2>
                                <input type="tel" className="warehouseModal__field" name="phone" placeholder="(000) 000 - 0000" required/>
                            </section>
                            <section className="warehouseModal__spacing warehouseModal__email">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="email">
                                    email
                                </h2>
                                <input type="email" className="warehouseModal__field" name="email" placeholder="email@instock.com" required />
                            </section>
                        </div>
                        <section className="warehouseModal__spacing warehouseModal__itemDescription">
                            <h2 className="warehouseModal__fieldTitle" htmlFor="itemDescription">
                                item description
                            </h2>
                            <textarea type="text" className="warehouseModal__field warehouseModal__textArea" name="inventoryCategories" placeholder="Use commas to separate each category" required/>
                        </section>
                        <section className="warehouseModal__buttons">
                            <button className="warehouseModal__buttonSave">
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

export default Warehousemodal;
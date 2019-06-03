import React, { Component } from 'react'
import axios from 'axios';
import Switch from 'react-switch';
import './inventoryModal.scss';

class InventoryModal extends Component {

    state = {
        name: '',
        description: '',
        quantity: '',
        lastOrdered: '',
        location: '',
    }

    handleSubmit = (event) => {

        const formData = {
            name: event.target.name.value,
            description: event.target.description.value,
            quantity: event.target.quantity.value,
            lastOrdered: event.target.lastOrdered.value,
            location: event.target.location.value,
    };

    const newItem = axios
        .post(`http://localhost:8080/inventory`, formData)
        .then(res => {
            axios.get(`http://localhost:8080/inventory`)
            .then(res => {
                this.setState({
                    inventory: [this.state.inventory, newItem]
                })
            })
        })
    };

    componentDidUpdate() {
		axios
			.get(`http://localhost:8080/inventory/`)
			.then(res => {
				const inventory = res.data.inventoryArray;
				this.setState({ inventory });
			});
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
                            Create New
                        </h1>
                        <div className="warehouseModal__tabletMode">
                            <section className="warehouseModal__spacing warehouseModal__address warehouseModal__marginRight">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="name">
                                    product
                                </h2>
                                <input type="text" className="warehouseModal__field" name="name" placeholder="Item Name" required/>
                            </section>
                            <section className="warehouseModal__spacing warehouseModal__location">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="lastOrdered">
                                    last ordered
                                </h2>
                                <input type="text" className="warehouseModal__field" name="lastOrdered" placeholder="dd-mm-yyyy" required/>
                            </section>
                        </div>
                        <div className="warehouseModal__tabletMode">
                            <section className="warehouseModal__spacing warehouseModal__contactName warehouseModal__marginRight">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="city">
                                    city
                                </h2>
                                <input type="text" className="warehouseModal__field" name="city" placeholder="City" required/>
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
                            <section className="warehouseModal__spacing warehouseModal__phoneNumber warehouseModal__marginRight">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="quantity">
                                    quantity
                                </h2>
                                <input type="tel" className="warehouseModal__field" name="quantity" placeholder="0" required/>
                            </section>
                            <section className="warehouseModal__spacing warehouseModal__email">
                                <h2 className="warehouseModal__fieldTitle" htmlFor="email">
                                    status
                                </h2>
                                <Switch />
                            </section>
                        </div>
                        <section className="warehouseModal__spacing warehouseModal__itemDescription">
                            <h2 className="warehouseModal__fieldTitle" htmlFor="description">
                                item description 
                            </h2>
                            <textarea type="text" className="warehouseModal__field warehouseModal__textArea" name="description" placeholder="(Optional)" required/>
                        </section>
                        <section className="warehouseModal__buttons">
                            <button className="warehouseModal__buttonSave" type='submit'>
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
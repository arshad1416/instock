import React, {Component} from 'react';
import '../warehousemodal/warehousemodal.scss';

class Warehousemodal extends Component {

    render() {

        if(!this.props.show) {
            return null;
        }

        return (
            <main className="warehouseModal warehouseModal__backDrop">
                <h1 className="warehouseModal__title">
                    Add New
                </h1>
                <section className="warehouseModal__spacing warehouseModal__warehouse">
                    <h2 className="warehouseModal__fieldTitle" htmlFor="warehouse">
                        warehouse
                    </h2>
                    <input type="text" className="warehouseModal__field" name="warehouse" placeholder="Name & ID" required />
                </section>
                <section className="warehouseModal__spacing warehouseModal__address">
                    <h2 className="warehouseModal__fieldTitle" htmlFor="address">
                        address
                    </h2>
                    <input type="text" className="warehouseModal__field" name="address" placeholder="Enter Address" required />
                </section>
                <section className="warehouseModal__spacing warehouseModal__location">
                    <h2 className="warehouseModal__fieldTitle" htmlFor="location">
                        location
                    </h2>
                    <select className="warehouseModal__field warehouseModal__dropDown" name="location">
                        <option value="Toronto, ON">Toronto, ON</option>
                        <option value="Mississauga, ON">Mississauga, ON</option>
                        <option value="Brampton, ON">Brampton, ON</option>
                        <option value="Caledon, ON">Caledon, ON</option>
                        <option value="Pickering, ON">Pickering, ON</option>
                    </select>
                </section>
                <section className="warehouseModal__spacing warehouseModal__contactName">
                    <h2 className="warehouseModal__fieldTitle" htmlFor="contactName">
                        contact name
                    </h2>
                    <input type="text" className="warehouseModal__field" name="contactName" placeholder="Enter Name" required/>
                </section>
                <section className="warehouseModal__spacing warehouseModal__position">
                    <h2 className="warehouseModal__fieldTitle" htmlFor="position">
                        position
                    </h2>
                    <input type="text" className="warehouseModal__field" name="position" placeholder="Enter Position" required />
                </section>
                <section className="warehouseModal__spacing warehouseModal__phoneNumber">
                    <h2 className="warehouseModal__fieldTitle" htmlFor="phoneNumber">
                        phone number
                    </h2>
                    <input type="tel" className="warehouseModal__field" name="phoneNumber" placeholder="(000) 000 - 0000" required />
                </section>
                <section className="warehouseModal__spacing warehouseModal__email">
                    <h2 className="warehouseModal__fieldTitle" htmlFor="email">
                        email
                    </h2>
                    <input type="email" className="warehouseModal__field" name="email" placeholder="email@instock.com" required />
                </section>
                <section className="warehouseModal__spacing warehouseModal__itemDescription">
                    <h2 className="warehouseModal__fieldTitle" htmlFor="itemDescription">
                        item description
                    </h2>
                    <textarea type="text" className="warehouseModal__field warehouseModal__textArea" name="itemDescription" placeholder="Use commas to separate each category" required />
                </section>
                <section className="warehouseModal__buttons">
                    <button className="warehouseModal__buttonSave">
                        save
                    </button>
                    <button className="warehouseModal__buttonCancel" onClick={this.props.onClose}>
                        cancel
                    </button>
                </section>
            </main>
        );
    }
}

export default Warehousemodal;
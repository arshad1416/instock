import React, { Component } from 'react';
import add from '../../assets/svg/Icon-add.svg';
import './inventory.scss';

export class AddItem extends Component {
    render() {
        return (
            <div className="button">
                <img className="button-logo" src={add} alt="add item button"/>
            </div>
        )
    }
}

export default AddItem;

import React, {Component} from 'react';
import Logo from '../../assets/logo/Logo-instock.svg';
import { NavLink } from 'react-router-dom'; 
import './navbar.scss';

class navbar extends Component {
    render() {        
        return (
                <div className="navBar">
                    <div className="navBar__navLogo">
                        <NavLink to="/">
                            <img src={Logo} alt="Instock" />
                        </NavLink>
                    </div>
                    <div className="navBar__navLink">
                        <ul className="navBar__navLink--nav">
                        <NavLink to="/inventory" className="navBar__navLink--nav-link" activeClassName="navBar__navLink--active"><li>Inventory</li></NavLink>                            
                        <NavLink to="/warehouses" className="navBar__navLink--nav-link" activeClassName="navBar__navLink--active"><li>Locations</li></NavLink>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default navbar

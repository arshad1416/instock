import React, {Component} from 'react';
import './inventory.scss';
import kebab from '../../assets/svg/Icon-kebab-default.svg';
import {Link} from 'react-router-dom';

class InventoryItemList extends Component {
    state= {            
        id: '',    
        clicked: false,                       
    };
 

    render(){
        
        const {id, name, description, lastOrdered, location, quantity, isInstock} = this.props.item;  
        
        const p_style = (this.props.activeKebobId === id)&&(this.props.disable)&&(this.props.clickOut) ? "mega-menu true" : "mega-menu false";
       
        return(
            <div className="item" ref="block" key={id} >
                <div className="item__label-button-wrap">
                    <h4 className="item__label">ITEM</h4>

                                      
                    <div className="kebob-item">                                                
                        <img className="item__button-mobile" src={kebab} alt="remove-button" id={id} onClick={this.props.handleKebob}/>                        
                        <div className={p_style}>                        
                            <p className="mega-menu-content" onClick={() => {this.props.Delete(id)}}>Remove</p>                        
                        </div> 
                    </div>
                    
                </div>
                <div className="item__item-description-wrap">
                    <Link to={`/inventory/${id}`} ><p className="item__name">{name}</p></Link>
                    <p className="item__info">{description}</p>
                </div>
                <h4 className="item__label">LAST ORDERED</h4>
                <p className="item__info">{lastOrdered}</p>
                <h4 className="item__label">LOCATION</h4>
                <p className="item__info">{location}</p>
                <h4 className="item__label">QUANTITY</h4>
                <p className="item__info">{quantity}</p>
                <h4 className="item__label">STATUS</h4>
                <p className="item__info">{isInstock ? 'In Stock': 'Out of Stock'}</p>
                <div className="kebob-item">
                    <img className="item__button-tablet" src={kebab} alt="remove button" id={id} onClick={this.props.handleKebob}/>                    
                </div>    
            </div>
        )
    }
}

export default InventoryItemList;
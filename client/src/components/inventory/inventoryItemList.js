import React, {Component} from 'react';
import './inventory.scss';
import kebab from '../../assets/svg/Icon-kebab-default.svg';

class InventoryItemList extends Component {
    state= {            
        id: '',    
        clicked: false,                       
    };

    handleClick = (index, event) => {                  
        this.setState({id: index, 
            clicked: !this.state.clicked,            
        });                     
    }    


    handleOutsideClick = () => {         
            if(this.state.clicked)
            {
                    this.setState({
                        clicked: !this.state.clicked
                    });
            }        
    }

    render(){
        const {id, name, description, lastOrdered, location, quantity} = this.props.item;  
                
        const p_style = this.state.id === id ? `mega-menu `+this.state.clicked : `mega-menu false`;
        
        return(
            <div className="item" ref="block" onClick={this.handleOutsideClick} key={id} >
                <div className="item__label-button-wrap">
                    <h4 className="item__label">ITEM</h4>

                                      
                    <div className="kebob-item">                        
                        <img className="item__button-mobile" src={kebab} alt="remove-button" id={id} onClick={(e) => {this.handleClick(id, e)}}/>                        
                        <div className={p_style}>
                        {/* <div id={id} className={this.state.id === id ? `mega-menu `+this.state.clicked : `mega-menu false`}> */}
                            <p className="mega-menu-content" onClick={() => {this.props.Click(id)}}>Remove</p>                        
                        </div> 
                    </div>
                    
                </div>
                <div className="item__item-description-wrap">
                    <p className="item__name">{name}</p>
                    <p className="item__info">{description}</p>
                </div>
                <h4 className="item__label">LAST ORDERED</h4>
                <p className="item__info">{lastOrdered}</p>
                <h4 className="item__label">LOCATION</h4>
                <p className="item__info">{location}</p>
                <h4 className="item__label">QUANTITY</h4>
                <p className="item__info">{quantity}</p>
                <h4 className="item__label">STATUS</h4>
                <p className="item__info">{/*item.isInStock*/}In Stock</p>
                <div className="kebob-item">
                    <img className="item__button-tablet" src={kebab} alt="remove button" id={id} onClick={() => {this.handleClick(id)}}/>                    
                </div>    
            </div>
        )
    }
}

export default InventoryItemList;
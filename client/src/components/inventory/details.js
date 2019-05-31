import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ItemInfo from './item-info';
import axios from 'axios';
import './details.scss';
import backArrow from '../../assets/svg/Icon-back-arrow.svg';

class Details extends Component {

    state = {
        id:'',
        itemInfo: {},
        stockLabel: {
            backgroundColor: ''
        }
    }

    
    componentDidMount(){
        axios.get(`http://localhost:8080/inventory/${this.props.match.params.id}`)
            .then(res=>
                this.setState({itemInfo: res.data})
                )
            .catch(err=> 
                console.log(err)
                )
    }
    componentDidUpdate() {
        this.checkStock();
    }

    checkStock() {
        if(this.state.itemInfo.isInstock){
            this.status.className = 'info__status info__status-in';
        }else{
            this.status.className = 'info__status info__status-out';
        }
        
    }

    render(){
        
        return (
            <div className="info">
                <div className="info__header">
                    <div className="info__header-h1">
                        <Link to="/inventory" ><img className="info__header-back" src={backArrow} alt="back" /></Link>
                        <h1 className="info__header-text">{this.state.itemInfo.name}</h1>
                    </div>   
                    <div ref={(status) => this.status = status} className="info__status">
                        {this.state.itemInfo.isInstock ? "In Stock" : "Out of Stock" }
                    </div>
                </div>    
                <ItemInfo itemInfo={this.state.itemInfo}/>
                <div className="info__btn-row">
                    <button className="info__btn-row-button">EDIT</button>
                </div>
            </div>
            
            
        )
    }
}

export default Details;
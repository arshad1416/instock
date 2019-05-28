import React, {Component} from 'react';
import ItemInfo from './item-info';
import axios from 'axios';
import './details.scss';

class Details extends Component {

    state = {
        id:''
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/inventory/${this.props.match.params.id}`)
            .then(res=>
                this.setState({itemInfo: res})
                )
            .catch(err=> 
                console.log(err)
                )
    }

    render(){

        return (
            <div className="info">   
                <ItemInfo itemInfo={this.state.itemInfo}/>
            </div>
            
            
        )
    }
}

export default Details;
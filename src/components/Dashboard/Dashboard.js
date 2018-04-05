import React, { Component } from 'react';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import axios from 'axios';
import { resetProperty } from '../../ducks/reducer.js';
import { connect } from 'react-redux';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            listings: this.props.listings 
        }
    }

    componentDidMount(){
        this.props.resetProperty();
    }


    render(){
        let { resetProperty, updateProperty } = this.props;
        return(
            <div>
                <Header/>
                <div className="white_container">
                <Link to='/step1'><button type='button' className='add_property'>Add New Property</button></Link>
                </div> 
            </div> 
        )
    }
}
function mapStateToProps(state){
    return{
        listings: state.listings
    }
}
export default connect(mapStateToProps,{resetProperty})(Dashboard)
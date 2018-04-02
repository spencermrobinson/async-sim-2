import React, { Component } from 'react';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component{
    constructor(){
        super();
    }


    render(){
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
export default Dashboard;
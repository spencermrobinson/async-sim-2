import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './Dashboard.css';

class Dashboard extends Component{
    constructor(){
        super();
    }


    render(){
        return(
            <div>
                <Header/>
                <div className="white_container"></div> 
            </div> 
        )
    }
}
export default Dashboard;
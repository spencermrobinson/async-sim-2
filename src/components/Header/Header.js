import React, { Component } from 'react';
import './Header.css';
import logo from '../assets/header_logo.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
 

class Header extends Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        axios.post('/api/logout')
        
    }

    render(){
        
    return(
        <div>
         <div className="header_outer">
         <section className="logo_box">
         <img src={logo} alt="logo" className="header_logo"/>
         <span className="houser_text"
         >Houser</span>
         <span className="dash_text"
         >Dashboard</span>
         </section>
         <section>
            <Link to="/" className='logout_link'><div className='logout' onClick={ () => {
                this.logout();
            }}>Logout</div></Link> 
        
         </section>
        
        </div> 
        </div>
    )}
}
export default Header;
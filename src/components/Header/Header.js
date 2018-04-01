import React from 'react';
import './Header.css';
import logo from '../assets/header_logo.png';

export default function Header(){
    //need to complete logout
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
        
         </section>
        
        </div> 
        </div>
    )
}
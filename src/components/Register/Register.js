import React, { Component } from 'react';
import logo from '../assets/auth_logo.png';
import { Link } from 'react-router-dom';
import Login from '../Login/Login.js';

class Register extends Component{
    constructor(props){
        super(props);
        this.state ={
            username: this.props.username,
            password: this.props.password
        }
        
        
       
        
    }

  




    render(){
    
        return(
            <div className='login_container'>
                <img src={ logo } alt="logo" class="logo"/>
                    <span className="title_text">Username</span>
                    <input type='text' className='username_input' onChange={(e) => this.handler('username', e.target.value)}/>
                    <span className="title_text">Password</span>
                    <input type='text' className='password_input' onChange={(e) => this.handler('password', e.target.value) }/>
                <div className="buttons_container">
                    
                    <button type='password' className='register_button'>Register</button>
                
                </div>
            </div> 
        )
    }

}
export default Register;
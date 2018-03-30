import React, { Component } from 'react';
import './Login.css';
import logo from '../assets/auth_logo.png';
import { Link } from 'react-router-dom';

class Login extends Component{
    constructor(){
        super();
        this.state={
            username: 'spencer',
            password: null
        }
        this.handler = this.handler.bind(this);
    }

    handler(prop, val){
        this.setState({
            [prop]: val
        })
    }




    render(){
        return(
            <div className='login_container'>
                <img src={ logo } alt="logo" class="logo"/>
                    <span className="title_text">Username</span>
                    <input type='text' className='username_input' onChange={(e) => this.handler('username', e.target.value) }/>
                    <span className="title_text">Password</span>
                    <input type='text' className='password_input' onChange={(e) => this.handler('password', e.target.value) }/>
                <div className="buttons_container">
                    <button type='text' className='login_button'>Login</button>
                    <Link to="/register" ><button type='password' className='register_button'>Register</button></Link>
                
                </div>
            </div> 
        )
    }

}
export default Login;
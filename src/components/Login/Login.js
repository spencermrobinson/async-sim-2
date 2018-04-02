import React, { Component } from 'react';
import './Login.css';
import logo from '../assets/auth_logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component{
    constructor(){
        super();
        this.state={
            username: '',
            password: null
        }
        this.handler = this.handler.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.setInputs = this.setInputs.bind(this);
    }

    handler(prop, val){
        this.setState({
            [prop]: val
        })
    };
    setInputs(){
        this.setState({
            username: this.state.username,
            password: this.state.password
         })
    };

    loginUser(){
        axios.post(`/api/loginUser`, {
            username: this.state.username,
            password: this.state.password })
            .then((res) => this.props.history.push('/dashboard'))
    }




    render(){
        
        return(
            <div className='login_container'>
                <img src={ logo } alt="logo" className="logo"/>
                    <span className="title_text">Username</span>
                    <input type='text' className='input' onChange={(e) => this.handler('username', e.target.value) }/>
                    <span className="title_text">Password</span>
                    <input type='text' className='input' onChange={(e) => this.handler('password', e.target.value) }/>
                <div className="buttons_container">
                    <button type='text' className='login_button' onClick={ () => {
                        this.setInputs();
                        this.loginUser();
                    }

                    }>Login</button>
                    <Link to="/register" ><button type='password' className='register_button'>Register</button></Link>
                
                </div>
            </div> 
        )
    }

}
export default Login;
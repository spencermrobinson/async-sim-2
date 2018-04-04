import React, { Component } from 'react';
import logo from '../assets/auth_logo.png';
import axios from 'axios';

class Register extends Component{
    constructor(){
        super();
        this.state ={
            username: '',
            password: ''
        }
        this.handler = this.handler.bind(this);
        this.setInputs = this.setInputs.bind(this);
        this.createUser = this.createUser.bind(this);
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

    createUser(){
        axios.post(`/api/createUser`, {
            username: this.state.username,
            password: this.state.password
        }).then((res) => this.props.history.push('/dashboard'))
    }
  




    render(){
    
        return(
            <div className='login_container'>
                <img src={ logo } alt="logo" className="logo"/>
                    <span className="title_text">Username</span>
                    <input type='text' className='input' onChange={(e) => this.handler('username', e.target.value)}/>
                    <span className="title_text">Password</span>
                    <input type='text' className='input' onChange={(e) => this.handler('password', e.target.value) }/>
                <div className="buttons_container">
                    
                    <button type='password' className='register_button' onClick={ ()=>
                        {
                            this.setInputs();
                            this.createUser();
                        }
                    }>Register</button>
                
                </div>
            </div> 
        )
    }

}
export default Register;
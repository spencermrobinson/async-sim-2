import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login/Login.js';
import Register from './Register/Register.js';



export default function Routes(){
    return <Switch>
        <Route exact path='/' component={ Login } />
        <Route path='/register' component={ Register } />
    </Switch>
}
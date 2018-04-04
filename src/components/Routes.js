import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import Dashboard from './Dashboard/Dashboard.js';
import Step1 from './Steps/Step1/Step1.js';
import Step2 from './Steps/Step2/Step2.js';
import Step3 from './Steps/Step3/Step3.js';
import Step4 from './Steps/Step4/Step4.js';
import Step5 from './Steps/Step5/Step5.js';



export default function Routes(){
    return <Switch>
        <Route exact path='/' component={ Login } />
        <Route path='/register' component={ Register } />
        <Route path='/dashboard' component={ Dashboard }/>
        <Route path='/step1' component= { Step1 }/>
        <Route path='/step2' component={ Step2 } />
        <Route path='/step3' component={ Step3 } />
        <Route path='/step4' component={ Step4 } />
        <Route path='/step5' component={ Step5 } />

    </Switch>
}

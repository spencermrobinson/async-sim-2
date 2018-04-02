import React, { Component } from 'react';
import Header from '../../Header/Header.js';
import './Step1.css';


class Step1 extends Component{
    constructor(){
        super();

    }



    render(){
        return(
            <div>
            <Header/>
                <div className="white_container">
                <section className='add_cancel'>
                <h3 className='add_property_text'>Add New Property</h3>
                <button type='button' className='cancel_button'>Cancel</button>
            </section>

            
                </div> 
            </div>
            
            
        )
    }
}
export default Step1;
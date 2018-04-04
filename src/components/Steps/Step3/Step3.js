import React, { Component } from 'react';
import Header from '../../Header/Header.js';

class Step3 extends Component{
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
            <section className="input_container">
                
                
                <div></div> 
                
                <span className="description_input_text">Image URL</span>
                
                <input type='text' className='image_input' />
                <button type='button' className='previous_step'>Previous Step</button>
                <button type='button' className='next_step' >Next Step</button>

            </section>

            
                </div> 
            </div>
        )
    }
}
export default Step3;
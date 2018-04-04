import React, { Component } from 'react';
import Header from '../../Header/Header.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProperty, resetProperty } from '../../../ducks/reducer.js';
class Step3 extends Component{
    constructor(){
        super();
    }

    render(){
        
        const { updateProperty, resetProperty } = this.props;
        return(
            <div>
            <Header/>
                <div className="white_container">
                <section className='add_cancel'>
                <h3 className='add_property_text'>Add New Property</h3>
                <Link to="/dashboard"><button type='button' className='cancel_button' onClick={ () => resetProperty()} >Cancel</button></Link>
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
function mapStateToProps( state ){
    return {
        name: state.property.name,
        description: state.property.description
    }
}
export default connect( mapStateToProps, { updateProperty, resetProperty})(Step3);
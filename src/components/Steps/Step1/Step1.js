import React, { Component } from 'react';
import Header from '../../Header/Header.js';
import './Step1.css';
import { connect } from 'react-redux';
import { updateProperty } from '../../../ducks/reducer.js';


class Step1 extends Component{
    constructor(props){
        super(props);
        this.state={
            name: this.props.property.name || '',
            description: this.props.property.description || ''
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange( prop, val ){
        this.setState({
            [prop]: val
        })
    }


    render(){
        console.log(this.state.name, 'consoled state')
        const { name, description } = this.state;
        const { updateProperty } = this.props;
        return(
            <div>
            <Header/>
                <div className="white_container">
                <section className='add_cancel'>
                <h3 className='add_property_text'>Add New Property</h3>
                <button type='button' className='cancel_button'>Cancel</button>
            </section>
            <section className="input_container">
                <span className="input_text">Name</span>
                
                <input type='text' className='input'/>
                
                <span className="description_input_text">Description</span>
                
                <input type='text' className='description_input'/>
                
                <button type='button' className='next_step'>Next Step</button>

            </section>

            
                </div> 
            </div>
            
            
        )
    }
}
export default connect(state => ({ property: state.property}), { updateProperty})(Step1);

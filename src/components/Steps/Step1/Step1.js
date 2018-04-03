import React, { Component } from 'react';
import Header from '../../Header/Header.js';
import './Step1.css';
import { connect } from 'react-redux';
import { updateProperty } from '../../../ducks/reducer.js';


class Step1 extends Component{
    constructor(props){
        super(props);
        const { property } = this.props;
        this.state={
            name: this.props.name || '',
            description: this.props.description || ''
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange( prop, val ){
        this.setState({
            [prop]: val
        })
    }


    render(){
        
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
                
                <input type='text' className='input' onChange={(e)=>{ this.handleChange('name', e.target.value)}}/>
                
                <span className="description_input_text">Description</span>
                
                <input type='text' className='description_input' onChange={(e)=>{ this.handleChange('description', e.target.value)}}/>
                
                <button type='button' className='next_step' onClick={ ()=> updateProperty({ name, description}) }>Next Step</button>

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
export default connect( mapStateToProps, { updateProperty})(Step1);

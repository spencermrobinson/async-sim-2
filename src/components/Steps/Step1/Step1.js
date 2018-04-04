import React, { Component } from 'react';
import Header from '../../Header/Header.js';
import './Step1.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProperty, resetProperty } from '../../../ducks/reducer.js';


class Step1 extends Component{
    constructor(props){
        super(props);
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
                <span className="input_text">Name</span>
                
                <input type='text' className='input' value={ name } onChange={(e)=>{ this.handleChange('name', e.target.value)}}/>
                
                <span className="description_input_text">Description</span>
                
                <input type='text' className='description_input' value={ description } onChange={(e)=>{ this.handleChange('description', e.target.value)}}/>
                
                <Link to="/step2"><button type='button' className='next_step' onClick={ ()=> updateProperty({ name, description}) }>Next Step</button></Link>

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
export default connect( mapStateToProps, { updateProperty, resetProperty})(Step1);

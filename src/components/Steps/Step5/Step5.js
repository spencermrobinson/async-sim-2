import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header.js';
import { resetProperty, updateProperty } from '../../../ducks/reducer.js';
import { connect } from 'react-redux';
import './Step5.css';
import axios from 'axios';

class Step5 extends Component{
    constructor(props){
        super(props);
        this.state={
            recommended: this.props.recommended || parseInt(this.props.mortgage, 10) * 1.25 || '',
            rent: this.props.rent || ''
        }
        this.handleChange = this.handleChange.bind(this);
        

    }

    completeProperty(){
        let { name, description, address, city, State, zip, image, loan, mortgage, rent, recommended_rent } = this.props;
//axios post
    }

    handleChange(prop, val){
        this.setState({
            [prop]:val
        })
    }

    render(){
        let { rent, recommended } = this.state;
        let { resetProperty, updateProperty } = this.props;
        
        
        return(
            <div>
                <Header/>
                <div className="white_container">
                <section className='add_cancel'>
                <h3 className='add_property_text'>Add New Property</h3>
                <Link to="/dashboard"><button type='button' className='cancel_button' onClick={ () => resetProperty()} >Cancel</button></Link>
                </section>
                <section className="input_container">
                    <span className="recommended_rent_input_text" >Recommened Rent ${recommended}</span>
                    <span className="desired_rent_input_text" >Desired Rent</span>
                    <input type='text' className='input' onChange={(e) =>{ this.handleChange('rent', e.target.value)}}/>
                <section className='button_container'>
                    <Link to="/step4"><button type='button' className='previous_step3' onClick={() => updateProperty({rent, recommended})}>Previous Step</button></Link>
                    <Link to="/dashboard"><button type='button' className='next_step3' onClick={() => updateProperty({rent, recommended})}>Complete</button></Link>
                </section>

                </section>
                </div>
            </div> 
        )
    }
}
function mapStateToProps(state){
    const {name, description, address, city, State, zip, image, loan, mortgage, rent, recommended_rent}=state.property;
    if(!state){
        return {}
        }
        
        return{ name,  description, address, city, State, zip, image, loan, mortgage, rent, recommended_rent } 
    
}
export default connect(mapStateToProps,{resetProperty,updateProperty})(Step5)
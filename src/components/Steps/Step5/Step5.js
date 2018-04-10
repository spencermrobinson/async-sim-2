import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header.js';
import { resetProperty, updateProperty } from '../../../ducks/reducer.js';
import { connect } from 'react-redux';
import active from '../assets/step_active.png';
import inactive from '../assets/step_inactive.png';
import completed from '../assets/step_completed.png';
import './Step5.css';
import axios from 'axios';

class Step5 extends Component{
    constructor(props){
        super(props);
        this.state={
            recommended_rent: this.props.recommended_rent || parseInt(this.props.mortgage, 10) * 1.25 || '',
            rent: this.props.rent || ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.completeProperty = this.completeProperty.bind(this);
        

    }

    completeProperty(){
        let { name, description, address, city, State, zip, image, loan, mortgage } = this.props;
        let { rent, recommended_rent } = this.state;
        
        
        axios.post(`/api/createProperty`, {
            
            name: name,
            description: description,
            address: address,
            city: city,
            state: State,
            zip: zip,
            image: image,
            loan: loan,
            mortgage: mortgage,
            rent: rent,
            recommended_rent: recommended_rent
        }).then((res) => {this.props.resetProperty();
             this.props.history.push('/dashboard')});
       
        
    }

    handleChange(prop, val){
        this.setState({
            [prop]:val
        })
    }

    render(){
        let { rent, recommended_rent } = this.state;
        let { resetProperty, updateProperty } = this.props;
        
        
        return(
            <div>
                <Header/>
                <div className="white_container">
                <section className='add_cancel'>
                <h3 className='add_property_text'>Add New Property</h3>
                <Link to="/dashboard"><button type='button' className='cancel_button' onClick={ () => resetProperty()} >Cancel</button></Link>
                </section>
                <div className="step_tracker_container">
                <p className="step">Step 5</p>
                <div className="step_tracker">
                    <img className="tracker"  src={ completed } alt="completed"/>
                    <img className="tracker"  src={ completed } alt="completed"/>
                    <img className="tracker"  src={ completed } alt="completed"/>
                    <img className="tracker"  src={ completed } alt="completed"/>
                    <img className="tracker"  src={ active } alt="active"/>
                </div> 
            </div> 
                <section className="input_container">
                    <span className="recommended_rent_input_text" >Recommened Rent ${recommended_rent}</span>
                    <span className="desired_rent_input_text" >Desired Rent</span>
                    <input type='text' className='input' onChange={(e) =>{ this.handleChange('rent', e.target.value)}}/>
                <section className='button_container'>
                    <Link to="/step4"><button type='button' className='previous_step3' onClick={() => updateProperty({rent, recommended_rent})}>Previous Step</button></Link>
                    
                    <button type='button' className='next_step3' onClick={() => {
                        
                        this.completeProperty();
                        

                    }}>Complete</button>
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
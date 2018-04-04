import React, { Component } from 'react';
import Header from '../../Header/Header.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProperty } from '../../../ducks/reducer.js';
import './Step2.css';

class Step2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            address: this.props.address || '',
            city: this.props.city || '',
            state: this.props.state || '',
            zip: this.props.zip || ''
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    render(){
        const { address, city, state, zip } = this.state;
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
                <span className="input_text">Address</span>
                
                    <input type='text' className='input' value={ address } onChange={ (e) => { this.handleChange('address', e.target.value)}}/>
                
                <span className="city_input_text">City</span>
                
                    <input type='text' className='city_input' value={ city } onChange={ (e) => {this.handleChange('city', e.target.value)}}/>

                <span className="state_input_text">State</span>
                
                    <input type='text' className='state_input' value={ state } onChange={ (e) => { this.handleChange('state', e.target.value)}}/>
                <br/>
                <span className="zip_input_text">Zip</span>
                
                    <input type='text' className='zip_input' value={ zip } onChange={ (e) => { this.handleChange('zip', e.target.value)}}/>

                <Link to="/step1"><button type='button' className='previous_step2' onClick={()=> updateProperty({address, city, state, zip})}>Previous Step</button></Link>
                <Link to="/step3"><button type='button' className='next_step2' onClick={()=> updateProperty({address, city, state, zip})}>Next Step</button></Link>

            </section>

            
                </div> 
            </div> 
        )
    }

}
function mapStateToProps( state ){
    return {
        address: state.property.address,
        city: state.property.city,
        state: state.property.state,
        zip: state.property.zip
    }
}
export default connect( mapStateToProps, { updateProperty})(Step2);
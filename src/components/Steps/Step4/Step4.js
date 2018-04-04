import React, { Component } from 'react';
import Header from '../../Header/Header.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProperty, resetProperty } from '../../../ducks/reducer.js';
import './Step4.css';


class Step4 extends Component{
    constructor(props){
        super(props);
        this.state = {
            loan: this.props.loan || '',
            mortgage: this.props.mortgage || ''
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }


    render(){
        let { loan, mortgage } = this.state;
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
                <span className="loan_input_text" >Loan Amount</span>
                
                    <input type='text' className='input' value={loan}  onChange={(e)=> { this.handleChange('loan', e.target.value)}}/>
                
                <span className="mortgage_input_text">Monthly Mortgage</span>
                
                    <input type='text' className='input' value={ mortgage } onChange={(e)=>{this.handleChange('mortgage', e.target.value)}}/>

               <section className='button_container'>
                <Link to="/step3"><button type='button' className='previous_step3'  onClick={()=> updateProperty({loan, mortgage})}>Previous Step</button></Link>
                <Link to="/step3"><button type='button' className='next_step3' onClick={()=> updateProperty({loan, mortgage})}>Next Step</button></Link>
                </section>

            </section>

            
                </div> 
            </div>  
        )
    }
}
function mapStateToProps(state){
    return {
        loan: state.property.loan,
        mortgage: state.property.mortgage
    }
}

export default connect(mapStateToProps,{resetProperty, updateProperty})(Step4)
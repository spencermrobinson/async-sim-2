import React, { Component } from 'react';
import Header from '../../Header/Header.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProperty, resetProperty } from '../../../ducks/reducer.js';
import './Step3.css';
import active from '../assets/step_active.png';
import inactive from '../assets/step_inactive.png';
import completed from '../assets/step_completed.png';
import logo from '../../assets/auth_logo.png'

class Step3 extends Component{
    constructor(props){
        super(props);
        this.state = {
            image: this.props.image 
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    render(){
        const { image } = this.state;
        const { updateProperty, resetProperty } = this.props;
        let imageRender = function(){
            if(image === null){
                return <img src={logo} alt='logo'/>
            }
            else{
                return <img src={ image } alt='image' className="url"/>
            }
        }
        return(
            <div>
            <Header/>
                <div className="white_container">
                <section className='add_cancel'>
                <h3 className='add_property_text'>Add New Property</h3>
                <Link to="/dashboard"><button type='button' className='cancel_button' onClick={ () => resetProperty()} >Cancel</button></Link>
            </section>
            <div className="step_tracker_container">
                <p className="step">Step 3</p>
                <div className="step_tracker">
                    <img className="tracker"  src={ completed } alt="completed"/>
                    <img className="tracker"  src={ completed } alt="completed"/>
                    <img className="tracker"  src={ active } alt="active"/>
                    <img className="tracker"  src={ inactive } alt="inactive"/>
                    <img className="tracker"  src={ inactive } alt="inactive"/>
                </div> 
            </div> 
            <section className="input_container">
                
                
                <div className='image_display_step3'>{imageRender()}</div> 
                
                <span className="description_input_text"></span>
                
                <input type='text' className='input' onChange={(e)=> {this.handleChange('image', e.target.value)}}/>

                <section className='button_container'>
                    <Link to="/step2"><button type='button' className='previous_step3' onClick={ updateProperty({ image })}>Previous Step</button></Link>
                    <Link to="/step4"><button type='button' className='next_step3' onClick={ updateProperty({ image })}>Next Step</button></Link>
                </section>

            </section>

            
                </div> 
            </div>
        )
    }
}
function mapStateToProps( state ){
    return {
        image: state.property.image,
        
    }
}
export default connect( mapStateToProps, { updateProperty, resetProperty})(Step3);
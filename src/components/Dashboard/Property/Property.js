import React, { Component } from 'react';
import deleteIcon from '../../assets/delete_icon.png'
import './Property.css';


export default class Property extends Component{
    render(){
        
    const { address, city, description, image, loan, mortgage, name, recommended_rent, rent, state, zip, id, deleteProperty, getProperties, listings} = this.props;
        return(
            <div className="grey_property_container">
                <div className="property_image_container">
                    <img className="property_image" src={ image } alt="home"/>
                </div>
                <div className="property_desc_container">
                    <div className="property_desc_parent">
                    <div className="property_desc_child">
                        <span className="property_text"
                        >Name: {name}</span>
                        <span className="property_text"
                        >Description: {  description }</span>
                    </div> 
                    </div> 
                    <div className="property_detail_parent">
                    <div className="property_detail_child">
                    <span className="property_text"
                    >Loan: ${ loan }</span>
                    <span className='property_text'
                    >Monthly Mortgage: ${ mortgage }</span>
                    <span className='property_text'
                    >Recommended Rent: ${ recommended_rent}</span>
                    <span className='property_text'
                    >Desired Rent: ${ rent }</span>
                    <span className='property_text'
                    >Address: { address }</span>
                    <span className='property_text'
                    >City: {city}</span><span className='property_text'
                    >State: {state}</span>
                    <span className="property_text"
                    >Zip: { zip }</span><br/>
                    <img className="delete_btn" onClick={ () => {
                        deleteProperty(id );
                        getProperties();
                        console.log('id:',id)
                        
                    }} src={ deleteIcon } alt="delete"/>
                    </div> 
                    </div> 
                </div>  
            </div> 
        )
    }
}

import React, { Component } from 'react';
import deleteIcon from '../../assets/delete_icon.png'


export default class Property extends Component{
    render(){
    const { address, city, description, image, loan, mortgage, name, recommended_rent, rent, state, zip, id, deleteProperty, fetchAllProperties} = this.props;
        return(
            <div className="grey_property_container">
                <div>
                    <img className="property_image" src={ image } alt="home"/>
                </div>
                <div className="property_desc_container">
                    <div className="property_desc_parent">
                    <div className="property_desc_child">
                        <span className="property_desc_name"
                        >{name}</span>
                        <span className="property_desc_desc"
                        >{  description }</span>
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
                    >City: {city}</span>
                    <span className="property_text"
                    >Zip: { zip }</span>
                    <img className="delete_btn" onClick={ () => {
                        deleteProperty(id );
                        console.log('id:',id)
                        
                    }} src={ deleteIcon } alt="delete"/>
                    </div> 
                    </div> 
                </div>  
            </div> 
        )
    }
}

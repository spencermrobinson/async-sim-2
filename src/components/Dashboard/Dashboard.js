import React, { Component } from 'react';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import { deleteProperty, getProperties, filterProperties } from '../../ducks/reducer.js';
import { connect } from 'react-redux';
import './Dashboard.css';
import Property from './Property/Property.js';
import Filter from './Filter/Filter.js';



class Dashboard extends Component{
    

    componentDidMount(){
        const { getProperties, history } = this.props;
        getProperties(history);
        
        
    }

    


    render(){
        
        const { filterProperties ,getProperties, deleteProperty, listings, history } = this.props;
        const propertiesRender = listings.map( prop => {
            return(
            <Property 
            key={prop.id}
            id={prop.id}
            address = { prop.address}
            city = { prop.city }
            description = { prop.description }
            recommended_rent ={ prop.recommended_rent }
            image = { prop.image }
            loan = { prop.loan }
            mortgage = { prop.mortgage }
            name = { prop.name }
            rent = { prop.rent }
            state = { prop.state }
            zip = { prop.zip }
            deleteProperty = { deleteProperty }
            getProperties = { getProperties }
            
            />)});
        
        return(
            <div>
                <Header/>
                <div className="white_container">
                <Link to='/step1'><button type='button' className='add_property'>Add New Property</button></Link>
                <Filter getProperties = { getProperties } filterProperties = { filterProperties }/>
                <div className="Dashboard__properties_container">
                { propertiesRender }
              </div>
                </div> 

             
                
                 
            </div> 
        )
    }
}
function mapStateToProps(state){
    return{
        listings: state.listings
    }
    
}

export default connect( mapStateToProps, { deleteProperty, getProperties, filterProperties })(Dashboard);
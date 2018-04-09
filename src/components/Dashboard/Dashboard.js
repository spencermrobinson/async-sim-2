import React, { Component } from 'react';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import { deleteProperty } from '../../ducks/reducer.js';
import { connect } from 'react-redux';
import './Dashboard.css';
import axios from 'axios';
import Property from './Property/Property.js';



class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state ={
            listings: this.props.listings
        }
        this.fetchAllProperties = this.fetchAllProperties.bind(this);
    }

    componentDidMount(){
        this.fetchAllProperties();
        
    }

    fetchAllProperties(){
        axios.get(`/api/getProperties`)
        .then((res) => {console.log(res.data) 
            this.setState({ listings: res.data })})

    }


    render(){
        console.log(this.props.listings,'listings')
        const propertiesRender = this.state.listings.map( prop => {
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
    
            />)});
        
        return(
            <div>
                <Header/>
                <div className="white_container">
                <Link to='/step1'><button type='button' className='add_property'>Add New Property</button></Link>
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

export default connect( mapStateToProps, { deleteProperty })(Dashboard);
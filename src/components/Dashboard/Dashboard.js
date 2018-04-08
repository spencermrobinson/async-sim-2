import React, { Component } from 'react';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import axios from 'axios';



class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            listings: []
        }
    }

    componentDidMount(){
        axios.get(`/api/getProperties`)
        .then((res) => {console.log(res.data) 
            this.setState({ listings: res.data })})
        
    }


    render(){
        console.log(this.state.listings,'listings')
        
        const propertiesRender = this.state.listings.map(e => 
            {return <div>
                <ul>
                <li className=''>{e.name}properties</li>
                </ul>
            </div>}
        )
        
        return(
            <div>
                <Header/>
                <div className="white_container">
                <Link to='/step1'><button type='button' className='add_property'>Add New Property</button></Link>
                </div> 
                <div>{this.state.listings.map(e => 
                    {return <div>
                        <ul>
                        <li className=''>{e.name}properties</li>
                        </ul>
                    </div>}
                )}</div> 
            </div> 
        )
    }
}

export default Dashboard;
import React, { Component } from 'react';
//import  { Container }  from 'react-bootstrap';

//import script
import HOC from '../../HOC/HOC';
import SiteBanner from '../../component/Site_banner/Site_banner';

//import data
// import nav_db from "./nav_db";

class Home extends Component{
    state = {
        nav_data : { Home : "/", Works : "/works", About :"About" }
    }

    render(){
        
        return(
            <HOC>
                <SiteBanner />
            </HOC>

        )
    }
}

export default Home;
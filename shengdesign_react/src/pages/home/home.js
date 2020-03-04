import React, { Component } from 'react';
//import  { Container }  from 'react-bootstrap';

//import script
import HOC from '../../HOC/HOC';
import SiteBanner from '../../component/Site_banner/Site_banner';
import Skills from './skills/skills';

//import data
// import nav_db from "./nav_db";

class Home extends Component{
    render(){
        return(
            <HOC>
                <SiteBanner />
                <Skills />
            </HOC>

        )
    }
}

export default Home;
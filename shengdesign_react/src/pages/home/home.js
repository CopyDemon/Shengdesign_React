import React, { Component } from 'react';
//import  { Container }  from 'react-bootstrap';

//import script
import HocLgBannerContentContainer from '../../HOC/Hoc_lg_banner_content_container/Hoc_lg_banner_content_container';
import Skills from './skills/skills';

//import data
// import nav_db from "./nav_db";

class Home extends Component{
    render(){
        return(
            <HocLgBannerContentContainer>
                <Skills />
            </HocLgBannerContentContainer>

        )
    }
}

export default Home;
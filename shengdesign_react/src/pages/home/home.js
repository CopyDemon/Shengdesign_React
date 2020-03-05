import React from 'react';
//import  { Container }  from 'react-bootstrap';

//import script
import HOC from '../../HOC/HOC';
import HocLgBannerContentContainer from '../../HOC/Hoc_lg_banner_content_container/Hoc_lg_banner_content_container';
import Skills from './skills/skills';

//import data
// import nav_db from "./nav_db";

const Home = () =>{
        return(
            <HOC>
                <Skills id="skills"/>
                <div id="text"></div>
            </HOC>

        )
}

export default Home;
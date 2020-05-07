import React from 'react';
//import script
import HOC from '../../HOC/HOC';
import Skills from './skills/skills';
import DesignWorkSlideShow from './design_work_slideshow/design_work_slideshow.main';

//import data
// import nav_db from "./nav_db";

const Home = () =>{
        return(
            <HOC>
                <Skills id="skills"/>
                <DesignWorkSlideShow />
            </HOC>

        )
}

export default Home;
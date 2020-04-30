import React from 'react';
//import script
import HOC from '../../HOC/HOC';
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
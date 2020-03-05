import React from 'react';

//import css
import classSelector from './home_banner.module.css';

const Home_banner = () =>{
    return(
        <div className={`${classSelector.home_banner_container}`}></div>
    )
}

export default Home_banner;
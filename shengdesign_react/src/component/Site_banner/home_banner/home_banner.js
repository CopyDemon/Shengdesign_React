import React, { useState, useEffect, useRef } from 'react';

//import css
import classSelector from './home_banner.module.css';


//import image
import match_image from '../../../Assets/image/cat.jpeg';
import cat_image from '../../../Assets/image/match.jpeg';
import building_black from '../../../Assets/image/building_black.jpg';
import phpcode from '../../../Assets/image/phpcode.jpg';

const Home_banner = () =>{
    const[home_banner_data, set_home_banner_data] = useState({
        home_banner_title : [
            'Welcome to site',
            'Learning and get smart', 
            'Everyday!'
        ],
        home_banner_image_url:[
            cat_image,
            match_image,
            building_black,
            phpcode
        ],
        home_banner_link:'Explore Now'
    });

    useEffect(()=>{
        //home banner bg image loop
        const home_banner_image_container = document.getElementById("home_banner_image_container");
        const home_banner_image_data = home_banner_data.home_banner_image_url;
        const home_banner_image_data_length = home_banner_data.home_banner_image_url.length;
        let count = 0;
        setInterval(()=>{
            if(count < home_banner_image_data_length - 1){
                count ++;
            }else{
                count = 0;
            }
            home_banner_image_container.style.backgroundImage = `url("${home_banner_image_data[count]}")`;
            console.log(home_banner_image_data[count])
        },3000)
    });
    //render title
    const home_banner_title_data = home_banner_data.home_banner_title;
    const rendered_home_banner_title = home_banner_title_data.map((item, index) =>{
        return <p className = {`${classSelector.home_banner_title_content}`} key={item + index}>{item}</p>
    });

    //link smooth scroll to skills
    // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    // const executeScroll = () => scrollToRef(myRef);

    return(
        <div className={`${classSelector.home_banner_container} p-0`}>
            <div className={`${classSelector.home_banner_image_container}`} id="home_banner_image_container"></div>
            <div className={`${classSelector.home_banner_content_container}`}>
                {rendered_home_banner_title}
                <button className={`${classSelector.home_banner_link}`}>{home_banner_data.home_banner_link}</button>
            </div>
        </div>
    )
}

export default Home_banner;
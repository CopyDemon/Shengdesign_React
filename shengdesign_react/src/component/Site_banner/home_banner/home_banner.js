import React, { useState, useEffect} from 'react';

//import css
import classSelector from './home_banner.module.css';


//import image
import match_image from '../../../Assets/image/cat.jpeg';
import cat_image from '../../../Assets/image/match.jpeg';
import building_black_image from '../../../Assets/image/building_black.jpg';
import phpcode_image from '../../../Assets/image/phpcode.jpg';

const Home_banner = () =>{
    const[home_banner_data] = useState({
        home_banner_title : [
            'Welcome to SHENG DEV',
            'Learning and get smart', 
            'Everyday!'
        ],
        home_banner_image_url:[
            cat_image,
            match_image,
            building_black_image,
            phpcode_image
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
        },2000)
    });

    //render title
    const home_banner_title_data = home_banner_data.home_banner_title;
    const rendered_home_banner_title = home_banner_title_data.map((item, index) =>{
        return <p className = {`${classSelector.home_banner_title_content}`} key={item + index}>{item}</p>
    });

    return(
        <section className={`${classSelector.home_banner_row} row col-lg-12 col-md-12 col-sm-12 p-0 m-0 mx-auto`}>
            <div className={`${classSelector.home_banner_main_container}`}>
                <div className={`${classSelector.home_banner_content_container}`}>
                    {rendered_home_banner_title}
                    <a href="#social_share_row"className={`${classSelector.home_banner_link}`}>{home_banner_data.home_banner_link}</a>
                </div>
            </div>
            <div className={`${classSelector.home_banner_image_container}`} id="home_banner_image_container"></div>
        </section>
    )
}

export default Home_banner;
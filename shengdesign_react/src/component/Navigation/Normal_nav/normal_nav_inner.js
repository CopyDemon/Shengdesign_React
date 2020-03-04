import React, { useEffect } from 'react';
//import script
import HOC from '../../../HOC/HOC';
import classSelector from './normal_nav.module.css';


const Nav_container = props =>{
        const nav_item = Object.keys(props.nav_data);
        const nav_li = nav_item.map((item) => {
            return(
                <li className={`${classSelector.nav_link}`} key={item} id={`${item}_nav_item`}>
                    <a href={props.nav_data[item]}>{item}</a>
                </li>
            )
        });

        
        //set active link with under line className
        useEffect(()=>{
            const window_location = window.location.href;
            const nav_list_content = Object.keys(props.nav_data);
            const home_url = 'http://localhost:3000/';

            nav_list_content.forEach((item)=>{
                if(window_location.includes(item)){
                    let current_nav_item = document.getElementById(`${item}_nav_item`);
                    current_nav_item.className += ` ${classSelector.actived_nav_item}`;
                }
            })
            
            if(window_location === home_url){
                let current_nav_item = document.getElementById("Home_nav_item");
                current_nav_item.className += ` ${classSelector.actived_nav_item}`;
            }
        });

    return(
        <HOC>
            {/*Normal nav*/}
            <nav className={`${classSelector.nav_container} large_nav`}>
                {nav_li}
            </nav>
        </HOC>
    );
}
export default Nav_container;
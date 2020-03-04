import React, { useEffect } from 'react';
//import script
import HOC from '../../../HOC/HOC';
import classSelector from './normal_nav.module.css';


const Nav_container = props =>{
        
        const nav_item = Object.keys(props.nav_data);

        const nav_li = nav_item.map((item) => {
            return(
                <li className={classSelector.nav_link} key={item} id={item}>
                    <a href={props.nav_data[item]}>{item}</a>
                </li>
            )
        });
        //const window_location = window.location.href;
        // const current_page_name = nav_item.forEach((item)=>{
        //     if(window_location.includes(item)){
        //         let current_nav_item = document.getElementById(item);
        //         current_page_name.setAttribute('class', "low")
        //     }
        // });
        


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
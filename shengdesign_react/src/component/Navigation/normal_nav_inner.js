import React from 'react';
//import script
import HOC from '../../HOC/HOC';
import classSelector from './nav.module.css';


const Nav_container = props =>{
        const nav_item = Object.keys(props.nav_data);
        const nav_li = nav_item.map((item) => {
            return(
                <li className={classSelector.nav_link} key={item}>
                    <a href={props.nav_data[item]}>{item}</a>
                </li>
            )
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
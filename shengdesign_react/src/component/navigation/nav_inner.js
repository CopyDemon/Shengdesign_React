import React from 'react';
import classSelector from './nav.module.css';
const Nav_container = props =>{
        const nav_item = Object.keys(props.nav_data);
        const nav_li = nav_item.map((item) => {
            return(
                <li className={classSelector.nav_link}>
                    <a href={props.nav_data[item]}>{item}</a>
                </li>
            )
        });

    return(
        <nav className={classSelector.nav_container}>
            {nav_li}
        </nav>
    );
}
export default Nav_container;
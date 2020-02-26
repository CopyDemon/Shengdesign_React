import React, { Component } from 'react';

//import script
import classSelector from './nav.css';

//import data
// import nav_db from "./nav_db";

class Nav extends Component{
    state = {
        nav_data : { Home : "/", Works : "/works", About :"About" }
    }

    render(){
        const nav_links_data = this.state.nav_data;
        const nav_item = Object.keys(nav_links_data);
        const nav_li = nav_item.map((item) => {
            return(
                <li>
                    <a href={nav_links_data[item]}>{item}</a>
                </li>
            )
        })
        return(
            <nav>
                {nav_li}
            </nav>
        )
    }
}
export default Nav;
import React, { Component } from 'react';
import  { Container,Row, Nav, Navbar,Form, FormControl, Button }  from 'react-bootstrap';

//import script
import classSelector from './nav.module.css';

//import data
// import nav_db from "./nav_db";

class Navigation extends Component{
    state = {
        nav_data : { Home : "/", Works : "/works", About :"About" },
        brand_name : "< Sheng Design />"
    }

    render(){
        const nav_links_data = this.state.nav_data;
        const nav_item = Object.keys(nav_links_data);
        const nav_li = nav_item.map((item) => {
            return(
                <li className={classSelector.nav_link}>
                    <a href={nav_links_data[item]}>{item}</a>
                </li>
            )
        })
        return(
            <Container fluid className="p-0">
                <Row className={`${classSelector.nav_row} justify-content-end bg-dark p-1`}>
                    <a href="/" className={classSelector.logo_container}>
                        <div className={classSelector.logo_inner_circle}>
                            <p href="/">SHENG</p>
                        </div>
                    </a>
                    <span className={classSelector.brand}>
                        <a href="/">{this.state.brand_name}</a>
                    </span>
                    <nav className={classSelector.nav_container}>
                        {nav_li}
                    </nav>
                </Row>
            </Container>
        )
    }
}
export default Navigation;
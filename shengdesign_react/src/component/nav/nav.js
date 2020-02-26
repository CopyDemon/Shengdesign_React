import React, { Component } from 'react';
import  { Container }  from 'react-bootstrap';
import  { Nav }  from 'react-bootstrap'
// import  Row  from 'react-bootstrap/Container';

//import script
import classSelector from './nav.css';

//import data
// import nav_db from "./nav_db";

class Navigation extends Component{
    state = {
        nav_data : { Home : "/", Works : "/works", About :"About" }
    }

    render(){
        const nav_links_data = this.state.nav_data;
        const nav_item = Object.keys(nav_links_data);
        const nav_li = nav_item.map((item) => {
            return(
                <Nav.Link className={classSelector.nav_list}>
                    <a href={nav_links_data[item]}>{item}</a>
                </Nav.Link>
            )
        })
        return(
            <Container>
                <Nav>
                    {nav_li}
                </Nav>
            </Container>
        )
    }
}
export default Navigation;
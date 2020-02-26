import React, { Component } from 'react';
import  { Container, Row, Col, Nav, Navbar,Form, FormControl, Button }  from 'react-bootstrap';

//import script
import classSelector from './nav.module.css';

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
                <li className={classSelector.nav_link}>
                    <a href={nav_links_data[item]}>{item}</a>
                </li>
            )
        })
        return(
            <Container fluid  bg="primary" className="p-0">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        {nav_li}
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </Container>
        )
    }
}
export default Navigation;
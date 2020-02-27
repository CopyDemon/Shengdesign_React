import React, { Component } from 'react';
import  { Container,Row}  from 'react-bootstrap';

//import script
import NavContainer from './nav_inner';
import classSelector from './nav.module.css';

class Navigation extends Component{
    state = {
        nav_data : { Home : "/", Works : "/works", About :"About" },
        brand_name : "SHENG"
    }

    render(){
        const nav_link_data = this.state.nav_data;

        return(
            <Container fluid className={`${classSelector.fixed_nav_container}`} id="nav_main_container">
                <Row className={`${classSelector.nav_row} justify-content-end bg-dark p-1`}>
                    <span className={`${classSelector.brand}`} id="brand">
                        <a href='/'>SHENG</a>
                    </span>
                    {/*Circle logo*/}
                    <a href="/" className={classSelector.logo_container}>
                        <span className={classSelector.logo_inner_circle}>
                            <p>{this.state.brand_name}</p>
                        </span>
                    </a>
                    <NavContainer nav_data = {nav_link_data} />
                </Row>
            </Container>
        )
    }
}
export default Navigation;
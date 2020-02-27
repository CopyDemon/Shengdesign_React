import React, { Component } from 'react';
import  { Container,Row}  from 'react-bootstrap';

//import script
import NormalNav from './normal_nav_inner';
import MobilNav from './Mobile_nav/mobile_nav';
import MobileHamburgerBar from './Hamburger_bar/Hamburger_bar';
import classSelector from './nav.module.css';


class Navigation extends Component{
    state = {
        nav_data : { Home : "/", Works : "/works", About :"About" },
        brand_name : "SHENG"
    }

    // Main_nav_hide_show = () =>{

    // }
    Mobile_nav_open_handler = () =>{
        const mobile_nav_main_container = document.getElementById('mobile_nav_main_container');
        console.log(mobile_nav_main_container)
        mobile_nav_main_container.style.top = "0%";
        mobile_nav_main_container.style.borderRadius = "50%";
    }

    Mobile_nav_close_handler = () =>{
        const mobile_nav_main_container = document.getElementById('mobile_nav_main_container');
        mobile_nav_main_container.style.top ="-200%";
        mobile_nav_main_container.style.borderRadius = "0";
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
                    <MobileHamburgerBar openMobileNav={this.Mobile_nav_open_handler}/>
                    <MobilNav nav_data={nav_link_data}  close_mobile_nav={this.Mobile_nav_close_handler}/>
                    <NormalNav nav_data = {nav_link_data} />
                </Row>
            </Container>
        )
    }
}
export default Navigation;
import React, { Component } from 'react';
import  { Container,Row}  from 'react-bootstrap';

//import script
import SiteNormalLogo from './Normal_logo/normal_logo';
import SiteMobileLogo from './Mobile_logo/mobile_logo';
import NormalNav from './Normal_nav/normal_nav_inner';
import MobilNav from './Mobile_nav/mobile_nav';
import MobileHamburgerBar from './Hamburger_bar/Hamburger_bar';
import classSelector from './nav.module.css';


class Navigation extends Component{
    state = {
        nav_data : { Home : "/", Works : "/Works", About :"About"},
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
                    <SiteNormalLogo brand_name = {this.state.brand_name}/>
                    <SiteMobileLogo brand_name = {this.state.brand_name}/>
                    <MobileHamburgerBar openMobileNav={this.Mobile_nav_open_handler}/>
                    <MobilNav nav_data={nav_link_data}  close_mobile_nav={this.Mobile_nav_close_handler}/>
                    <NormalNav nav_data = {nav_link_data} />
                </Row>
            </Container>
        )
    }
}
export default Navigation;
import React, { Component } from 'react';
import  { Container,Row}  from 'react-bootstrap';

//import script
import NavContainer from './nav_inner';
import classSelector from './nav.module.css';

class Navigation extends Component{
    state = {
        nav_data : { Home : "/", Works : "/works", About :"About" },
        brand_name : "< Sheng Design />"
    }

    render(){
        const nav_link_data = this.state.nav_data;
        // const navbar_scroll_handler = () =>{
        //     window.addEventListener('scroll', () => {
        //         console.log(window.pageYOffset);
        //         const site_nav = document.getElementById("nav_main_container");
        //         window.pageYOffset
        //         //window.pageYOffset >= site_nav.clientHeight ? site_nav.style.position = "fixed" : site_nav.style.position = "relative";
        //         //site_nav >= site_nav.clientHeight ?  alert('great') : alert("not great");
        //     })
        // }

        //navbar_scroll_handler();

        return(
            <Container fluid className={`${classSelector.fixed_nav_container} p-0`} id="nav_main_container">
                <Row className={`${classSelector.nav_row} justify-content-end bg-dark p-1`}>
                    <a href="/" className={classSelector.logo_container}>
                        <div className={classSelector.logo_inner_circle}>
                            <p href="/">SHENG</p>
                        </div>
                    </a>
                    <NavContainer nav_data = {nav_link_data} />
                </Row>
            </Container>
        )
    }
}
export default Navigation;
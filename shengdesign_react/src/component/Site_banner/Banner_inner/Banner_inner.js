import React from 'react';
import {Container, Row} from 'react-bootstrap';

//import script
import classSelector from './Banner_inner.module.css';

const Banner_inner = props =>{
    const banner_margin_top = () =>{
        const fixed_nav_container_height = document.getElementById('nav_main_container');
        console.log(fixed_nav_container_height);
    }
      banner_margin_top();
    return(
        <Container 
            id="banner_inner" 
        >
            <Row className={`${classSelector.banner_inner_main_container} justify-content-center col-lg-10 col-md-10 col-sm-12 mx-auto`}>
                Banner inner
            </Row>
        </Container>
    )
}

export default Banner_inner;
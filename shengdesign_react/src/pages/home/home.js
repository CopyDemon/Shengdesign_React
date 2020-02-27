import React, { Component } from 'react';
import  { Container }  from 'react-bootstrap';

//import script


//import data
// import nav_db from "./nav_db";

class Home extends Component{
    state = {
        nav_data : { Home : "/", Works : "/works", About :"About" }
    }

    render(){
        
        return(
            <Container fluid className="p-0">
               <h1>Home Page</h1>
            </Container>
        )
    }
}

export default Home;
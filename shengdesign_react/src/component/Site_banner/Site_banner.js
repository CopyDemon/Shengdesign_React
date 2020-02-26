import React, {Component} from 'react';
//import sctipt
import HOC from '../../HOC/HOC';
import  Navigation from "../Navigation/navigation";
import Banner_inner from './Banner_inner/Banner_inner';


class Site_banner extends Component{
    state={}
    
    render(){
        return(
            <HOC>
                <Navigation />
                <Banner_inner />
            </HOC>
        )
    }
}

export default Site_banner;
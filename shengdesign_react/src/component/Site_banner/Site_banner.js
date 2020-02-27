import React, {Component} from 'react';
//import sctipt
import BannerInner from './Banner_inner/Banner_inner';


class Site_banner extends Component{
    state={}
    
    componentDidMount(){
        const nav_height = document.getElementById("nav_main_container").clientHeight;
        const banner_inner = document.getElementById("banner_inner");
        banner_inner.style.marginTop = `${nav_height + 10}px`;
    }

    render(){
        
        return(
            <BannerInner />
        )
    }
}

export default Site_banner;
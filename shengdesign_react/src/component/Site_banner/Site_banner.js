import React, {Component} from 'react';
//import sctipt
import HomeBanner from './home_banner/home_banner';
import SocialShare from '../social_share/social_share';


class Site_banner extends Component{
    state={}
    
    // componentDidMount(){
    //     const nav_height = document.getElementById("nav_main_container").clientHeight;
    //     const banner_inner = document.getElementById("banner_inner");
    //     banner_inner.style.marginTop = `${nav_height + 10}px`;
    // }

    render(){
        
        return(
            <section className={`container-fluid p-0 m-0`}>
                <HomeBanner className={`row col-lg-12 col-md-12 col-sm-12 mx-auto p-0 m-0`}/>
                <SocialShare className={`row col-lg-12 col-md-12 mx-auto p-0`}/>
            </section>
        )
    }
}

export default Site_banner;
import React, {Component} from 'react';
//import sctipt
import HomeBanner from './home_banner/home_banner';
import SocialShare from '../social_share/social_share';


class Site_banner extends Component{
    state={}
    render(){
        
        return(
            <section className={`container-fluid p-0 m-0`}>
                <HomeBanner />
                <SocialShare/>
            </section>
        )
    }
}

export default Site_banner;
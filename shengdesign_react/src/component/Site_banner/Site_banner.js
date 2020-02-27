import React, {Component} from 'react';
//import sctipt
import HOC from '../../HOC/HOC';
import  Navigation from "../Navigation/navigation";
import BannerInner from './Banner_inner/Banner_inner';


class Site_banner extends Component{
    state={}

    // componentDidMount (){
    //     this.banner_margin_top();
    // }
    render(){
        return(
            <HOC>
                <Navigation />
                <BannerInner />
            </HOC>
        )
    }
}

export default Site_banner;
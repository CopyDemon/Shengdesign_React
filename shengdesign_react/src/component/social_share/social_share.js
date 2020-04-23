import React,{ useState } from 'react';

//import css
import classSelector from './social_share.module.css';


//import image
import facebook_social_icon from '../../Assets/image/social_icon/facebook.png';
import twitter_social_icon from '../../Assets/image/social_icon/twitter.png';
import linkedin_social_icon from '../../Assets/image/social_icon/linkedin.png';
import github_social_icon from '../../Assets/image/social_icon/github.png';

const SocialShare = (props) =>{
    const [social_share_content] = useState({
        title : "Share With Your Friend 👍"
    })

    const[social_share_btn_state] = useState([
        {
            name:'Facebook',
            link:'https://www.shengdesign.com',
            icon:facebook_social_icon
        },
        {
            name:'Twitter',
            link:'https://www.shengdesign.com',
            icon:twitter_social_icon
        },
        {
            name:'Linkedin',
            link:'https://www.shengdesign.com',
            icon:linkedin_social_icon
        },
        {
            name:'Github',
            link:'https://www.shengdesign.com',
            icon:github_social_icon
        }
    ]);
    

    //map social share btn
    const display_social = social_share_btn_state.map((item, index) => {
        console.log(item)
        return(
            <a href={item.link} key={"display_social: " + item + index}>
                <img src={item.icon} className={`${classSelector.social_share_icon}`} alt={item}/>
            </a>
        ) 
    })

    return (
        <section className={`${classSelector.social_share_main_container}`} id="social_share_row">
            <article className={`${classSelector.social_share_content_container}`}>
                <p className={`${classSelector.social_share_title}`}>{social_share_content.title}</p>
                <div className={`${classSelector.social_share_icon_container}`}>
                    {display_social}
                </div>
            </article>
            <div className={`${classSelector.social_share_container_color_overlay}`}></div>
        </section>   
    )
}

export default SocialShare
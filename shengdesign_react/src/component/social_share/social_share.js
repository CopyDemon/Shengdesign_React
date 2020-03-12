import React,{ useState } from 'react';

//import css
import classSelector from './social_share.module.css';


//import image
import facebook_social_icon from '../../Assets/image/social_icon/facebook.png';
import twitter_social_icon from '../../Assets/image/social_icon/twitter.png';
import linkedin_social_icon from '../../Assets/image/social_icon/linkedin.png';
import github_social_icon from '../../Assets/image/social_icon/github.png';

const SocialShare = (props) =>{
    const[social_state] = useState([
        {
            name:'Facebook',
            link:'#',
            icon:facebook_social_icon
        },
        {
            name:'Twitter',
            link:'#',
            icon:twitter_social_icon
        },
        {
            name:'Linkedin',
            link:'#',
            icon:linkedin_social_icon
        },
        {
            name:'Github',
            link:'#',
            icon:github_social_icon
        }
    ]);

    //map social share btn
    const display_social = social_state.map((item, index) => {
        console.log(item)
        return(
            <a href={item.link} key={"display_social: " + item + index}>
                <img src={item.icon} className={`${classSelector.social_share_icon}`} alt={item}/>
                {/* {item.name} */}
            </a>
        ) 
    })

    return (
        <section className={`${classSelector.social_share_main_container}`} id="social_share_row">
            <article className={`${classSelector.social_share_content_container}`}>
                <p className={`${classSelector.social_share_title}`}>Share With Your Friend</p>
                <div className={`${classSelector.social_share_icon_container}`}>
                    {display_social}
                </div>
            </article>
        </section>   
    )
}

export default SocialShare
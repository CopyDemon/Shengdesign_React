import React,{ useState, useEffect } from 'react';

//import css
import classSelector from './social_share.module.css';


//import image
import facebook_social_icon from '../../Assets/image/social_icon/facebook.png';
import twitter_social_icon from '../../Assets/image/social_icon/twitter.png';
import linkedin_social_icon from '../../Assets/image/social_icon/linkedin.png';

const SocialShare = (props) =>{
    //state for social share title
    const [social_share_content] = useState({
        title : "Share With Your Friend 👍"
    })
    // state for social share
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
        }
    ]);
    //state for github link
    const[github_link_state] = useState({
        github_url : "https://github.com/CopyDemon"
    })

    useEffect(()=>{
        //github link mouse over and out show text
        const github_link = document.getElementById(`github_link`);
        github_link.addEventListener('mouseover', ()=>{
            setTimeout(()=>{
                github_link.innerHTML = "GITHUB 😋";
            },1)
        })

        github_link.addEventListener('mouseout', ()=>{
            github_link.innerHTML = "";
        })
    })
    

    //map social share btn
    const display_social = social_share_btn_state.map((item, index) => {
        return(
            <a href={item.link} key={"display_social: " + item + index}>
                <img src={item.icon} className={`${classSelector.social_share_icon}`} alt={item}/>
            </a>
        ) 
    })



    return (
        <section className={`${classSelector.social_share_main_container}`} id="social_share_row">
            <div className={`${classSelector.social_share_content_container}`}>
                <p className={`${classSelector.social_share_title}`}>{social_share_content.title}</p>
                <div className={`${classSelector.social_share_icon_container}`}>
                    {display_social}
                </div>
                <a href={github_link_state.github_url} className={`${classSelector.github_link}`} id="github_link"><span></span></a>
            </div>
            
            
            <div className={`${classSelector.social_share_container_color_overlay}`}></div>
        </section>   
    )
}

export default SocialShare
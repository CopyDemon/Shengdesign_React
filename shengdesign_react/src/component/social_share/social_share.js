import React,{ useState } from 'react';
import classSelector from './social_share.module.css';

const SocialShare = (props) =>{
    const [socialState, setSocialState] = useState({
        facebook:{
            name:'Facebook',
            link:'#',
            icon:'../../Assets/image/social_icon/facebook.png'
        },
        twitter:{
            name:'Twitter',
            link:'#',
            icon:'../../Assets/image/social_icon/twitter.png'
        },
        linkedin:{
            name:'Linkedin',
            link:'#',
            icon:'../../Assets/image/social_icon/linkedin.png'
        },
        github:{
            name:'Github',
            link:'#',
            icon:'../../Assets/image/social_icon/github.png'
        }
    })

    // const display_social_share = social.State.map((item)=>{
    //     console.log('ok' + item)
    // })
    return (
        <section className={`${classSelector.social_share_main_container}`}>
            <article className={`${classSelector.social_share_content_container}`}>
                <p className={`${classSelector.social_share_title}`}>Share With Your Friend</p>
                <div className={`${classSelector.social_share_icon_container}`}>

                </div>
            </article>


        </section>   
    )
}

export default SocialShare
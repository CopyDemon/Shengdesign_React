import React,{useState, useEffect} from 'react';

//import css
import classSelector from './skills_content.module.css';
//import image


const SkillsContent = () =>{
    const [skills_content] = useState({
        html : {
            icon:"fab fa-html5",
            name:"HTML",
            start_year:2014
        },
        css:{
            icon:"fab fa-css3-alt",
            name:"CSS",
            start_year:2014
        },
        js:{
            icon:"fab fa-js",
            name:"JavaScript",
            start_year:2014
        },
        node:{
            icon:"fab fa-node",
            name:"NodeJS",
            start_year:2017
        },
        react:{
            icon:"fab fa-react",
            name:"ReactJS",
            start_year:2017
        },
        vue:{
            icon:"fab fa-vuejs",
            name:"VueJS",
            start_year:2016
        },
        angular:{
            icon:"fab fa-angular",
            name:"Angular7,8",
            start_year:2018
        },
        mongodb:{
            icon:"fab fa-envira",
            name:"MongoDB",
            start_year:2018
        },
        sql:{
            icon:"fas fa-database",
            name:"SQL",
            start_year:2016
        },
        php:{
            icon:"fab fa-php",
            name:"PHP",
            start_year:2016
        }
    });

    useEffect(()=>{
    });
    

    // function
    //get current year for skills, use current year - skills start year = experience years
    const current_year = new Date().getFullYear();
    //map db and create icons
    const skills_cards = Object.keys(skills_content).map(el=>{
        return[...Array(skills_content[el])].map((el,index)=>{
            return(
                <div className={`${classSelector.skill_card} a`} key={index}>
                    <div className={`${classSelector.skill_card_bg}`}></div>
                    <i className={`${el.icon} ${classSelector.skills_icon}`}></i>
                    <p className={`${classSelector.skill_card_title}`}>{el.name}</p>
                    <p className={`${classSelector.skill_experience_year}`}>{current_year - el.start_year} Years Experience</p>
                </div>
            )
        })
    });

    return(
        <div className={`${classSelector.skills_content_container}`}>
            <div className={`${classSelector.skills_content_inner_container}`}>
                {skills_cards}
            </div>
        </div>
    )
}

export default SkillsContent;
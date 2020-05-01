import React,{useState, useEffect} from 'react';

//import css
import classSelector from './skills_content.module.css';
//import image


const SkillsContent = () =>{
    const [skills_content] = useState({
        html : {
            icon:"fa-html5",
            name:"HTML"
        },
        css:{
            icon:"fa-css3-alt",
            name:"CSS"
        },
        js:{
            icon:"fa-js",
            name:"JavaScript"
        },
        node:{
            icon:"fa-node",
            name:"NodeJS"
        },
        react:{
            icon:"fa-react",
            name:"ReactJS"
        },
        vue:{
            icon:"fa-vuejs",
            name:"VueJS"
        },
        angular:{
            icon:"fa-angular",
            name:"Angular7,8"
        },
        mongodb:{
            icon:"fa-envira",
            name:"MongoDB"
        },
        sql:{
            icon:"fa-database",
            name:"SQL"
        },
        php:{
            icon:"fa-php",
            name:"PHP"
        }
    });

    // function
    //map db and create icons
    const skills_cards = Object.keys(skills_content).map(el=>{
        return[...Array(skills_content[el])].map((el)=>{
            return(
                <div className={`${classSelector.skill_card}`}>
                    <i className={`fab ${el.icon}`}></i>
                </div>
            )
        })
    });

    return(
        <div className={`${classSelector.skills_content_container}`}>
            {skills_cards}
            <i className="fab fa-html5"></i>
            <i className="fab fa-html5"></i>
        </div>
    )
}

export default SkillsContent;
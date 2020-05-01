import React,{useState, useEffect} from 'react';

//import css
import classSelector from './skills_content.module.css';
//import image


const SkillsContent = () =>{
    const [skills_content] = useState({
        html : {
            icon:'<i class="fab fa-html5"></i>',
            name:"HTML"
        },
        css:{
            icon:'<i class="fab fa-css3-alt"></i>',
            name:"CSS"
        },
        js:{
            icon:'<i class="fab fa-js"></i>',
            name:"JavaScript"
        },
        node:{
            icon:'<i class="fab fa-node"></i>',
            name:"NodeJS"
        },
        react:{
            icon:'<i class="fab fa-react"></i>',
            name:"ReactJS"
        },
        vue:{
            icon:'<i class="fab fa-vuejs"></i>',
            name:"VueJS"
        },
        angular:{
            icon:'<i class="fab fa-angular"></i>',
            name:"Angular7,8"
        },
        mongodb:{
            icon:'<i class="fab fa-envira"></i>',
            name:"MongoDB"
        },
        sql:{
            icon:'<i class="fas fa-database"></i>',
            name:"SQL"
        },
        php:{
            icon:'<i class="fab fa-php"></i>',
            name:"PHP"
        }
    });

    // function
    //map db and create icons
    const skills_obj_keys = Object.keys(skills_content);
    const a = skills_obj_keys.forEach(el=>{
            console.log(skills_content.el)
        })

    console.log(skills_content.html)

    return(
        <div className={`${classSelector.skills_content_container}`}>
            
        </div>
    )
}

export default SkillsContent;
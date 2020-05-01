import React,{useState, useEffect} from 'react';

//import css
import classSelector from './skills_content.module.css';
//import image


const SkillsContent = () =>{
    const [skills_content] = useState({
        html : {
            icon:<i class="fab fa-html5"></i>
        },
        css:{
            icon:<i class="fab fa-css3-alt"></i>
        },
        js:{
            icon:<i class="fab fa-js"></i>
        },
        node:{
            icon:<i class="fab fa-node"></i>
        },
        react:{
            icon:<i class="fab fa-react"></i>
        },
        vue:{
            icon:<i class="fab fa-vuejs"></i>
        },
        angular:{
            icon:<i class="fab fa-angular"></i>
        },
        php:{
            icon:<i class="fab fa-php"></i>
        }
    })
    return(
        <div className={`${classSelector.skills_content_container}`}>

        </div>
    )
}

export default SkillsContent;
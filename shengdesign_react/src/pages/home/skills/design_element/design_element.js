import  React, {useEffect} from 'react';

//import css
import classSelector from './design_element.module.css';

    
const Skills_section_design_element = () =>{
    
    let skills_design_element_mock = "";
    useEffect(()=>{
        const skills_desgin_element_container = document.getElementById('skills_desgin_element_container');
        const skills_design_element_content_container_top = skills_desgin_element_container.getBoundingClientRect().top;
        window.onscroll = () => {
            if(window.scrollY + window.innerHeight >  skills_design_element_content_container_top + skills_desgin_element_container.clientHeight /2){
                skills_design_element_mock = <div className={`${classSelector.skills_design_element_mock_container}`}>
                                                <div className={`test`}>
                                                </div>
                                            </div>
                console.log(skills_design_element_mock)
            }
        }
    })
    return(
        <div className={`${classSelector.skills_desgin_element_container} col-lg-6 col-md-12 col-sm-12 px-0`} id="skills_desgin_element_container">
            <div className={`${classSelector.skills_design_element_content_container}`}>
                {skills_design_element_mock}
                <div className={`${classSelector.skills_design_element_content_container_bg} ${classSelector.skills_design_element_content_container_bg_animtion}`}></div>
            </div>
        </div>
    )
}

export default Skills_section_design_element;
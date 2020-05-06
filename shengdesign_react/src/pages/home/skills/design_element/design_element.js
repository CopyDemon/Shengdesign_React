import  React, {useEffect} from 'react';

//import css
import classSelector from './design_element.module.css';

    
const Skills_section_design_element = () =>{
    const skills_design_element_mock = <div className={`${classSelector.skills_design_element_mock_container}`}>
                    <div className={`${classSelector.skills_design_element_mock_browser_btn_inner_container}`}>
                        <span className={`${classSelector.skills_design_element_mock_browser_btn}`}></span>
                        <span className={`${classSelector.skills_design_element_mock_browser_btn}`}></span>
                        <span className={`${classSelector.skills_design_element_mock_browser_btn}`}></span>
                    </div>
                </div>
    useEffect(()=>{
        const skills_desgin_element_container = document.getElementById('skills_desgin_element_container');
        console.log(skills_desgin_element_container.getClientRects() + "??")
        setTimeout(()=>{
        },2000)
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
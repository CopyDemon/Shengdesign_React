import  React from 'react';

//import css
import classSelector from './design_element.module.css';


const Skills_section_design_element = () =>{
    return(
        <div className={`${classSelector.skills_desgin_element_container} col-lg-6 col-md-6 col-sm-12`}>
            <div className={`${classSelector.skills_design_element_square}`}>
                <div className={`${classSelector.skills_design_element_square_inner}`}></div>
            </div>
            <div className={`${classSelector.skills_design_element_circle}`}>
                <div className={`${classSelector.skills_design_element_line}`}></div>
            </div>
        </div>
    )
}

export default Skills_section_design_element;
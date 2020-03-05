import React, { useState } from 'react';
import {Container , Row} from 'react-bootstrap';

//import script
import DesignElement from './design_element/design_element';
//import css
import mainClassSelector from '../../../main.module.css';
import classSelector from './skills.module.css';
const Skills = ( props ) =>{
    const [skills_data, setSkills] = useState({
        skills_title_text:['Unlimitied Web', 'Development & Design', 'Skills.'],
        main_skills:['Frontend', 'Backend']
    });

    const main_skills = skills_data.main_skills;
    const skills_tab = main_skills.map((item, index) => {
        return <span className = {`${classSelector.home_skills_tab}`} key = {item + index}>{item}</span>
    })

    const skills_title_text = skills_data.skills_title_text;
    console.log(skills_title_text)
    const rendered_skills_title_text = skills_title_text.map((item, index) => {
        return <p className={classSelector.skills_text} key={item + index}>{item}</p>
    })

    return(
        <Container>
            <Row className={`col-lg-12 col-md-12 col-md-12`}>
                <div className={`${classSelector.skills_content_main_container} col-lg-6 col-md-6 col-sm-12`}>
                    <div className={`${classSelector.skills_text_container}`}>
                        {rendered_skills_title_text}
                    </div>
                    <div className={`${classSelector.skills_tab_container}`}>
                        {skills_tab}
                    </div>
                </div>
                <DesignElement />
                {/* <div 
                    className = {
                        `${mainClassSelector.justify_content_center} 
                        col-lg-12 col-md-12 col-sm-12`
                    }
                >
                    <p className = {`${mainClassSelector.section_title}`}>Skills</p>
                </div>

                
                <div className={`${classSelector.skills_tab_outer_container} col-lg-5 col-md-5 col-sm-12`}>
                    <div 
                        className = {
                            `${mainClassSelector.justify_content_vertical} 
                            ${classSelector.skills_tab_inner_container}
                            `
                        }
                    >
                        {skills_tab}
                    </div>
                </div> */}
                {/* <div className={`col-lg-12 col-md-12 col-sm-12`}>

                </div> */}
            </Row>
        </Container>
    )
}

export default Skills;
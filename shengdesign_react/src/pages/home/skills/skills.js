import React, { useState }from 'react';
import {Container , Row} from 'react-bootstrap';

//import scripts
import mainClassSelector from '../../../main.module.css';
import classSelector from './skills.module.css';
const Skills = ( props ) =>{
    const [skills, setSkills] = useState({
        main_skills:['Frontend', 'Backend']
    });

    const main_skills = skills.main_skills;
    const skills_tab = main_skills.map(item => {
        return <span className = {`${classSelector.home_skills_tab}`}>{item}</span>
    })

    return(
        <Container>
            <Row>
                <div 
                    className = {
                        `${mainClassSelector.justify_content_center} 
                        col-lg-12 col-md-12 col-sm-12`
                    }
                >
                    <p className = {`${mainClassSelector.section_title}`}>Skills</p>
                </div>
                <div 
                    className = {
                        `${mainClassSelector.justify_content_center} 
                        ${classSelector.skills_tab_container} 
                        col-lg-12 col-md-12 col-sm-12`
                    }
                >
                    {skills_tab}
                </div>
                
            </Row>
        </Container>
    )
}

export default Skills;
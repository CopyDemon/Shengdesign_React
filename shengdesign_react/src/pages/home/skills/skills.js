import React from 'react';
import {Row} from 'react-bootstrap';

//import script
import DesignElement from './design_element/design_element';
import SkillsMainContent from './skills_main_content/skills_main_content';
import AllSkills from './all_skills/all_skills';
//import css
//import mainClassSelector from '../../../main.module.css';
import classSelector from './skills.module.css';
const Skills = ( props ) =>{
    return(
        <div className={`container-fluid`}>
            <Row className={`${classSelector.skills_row} col-lg-12 col-md-12 col-md-12 px-0 mx-auto`}>
                <SkillsMainContent />
                <DesignElement />
                <AllSkills />
            </Row>
        </div>
    )
}

export default Skills;
import React, { useState } from 'react';

//import script
import AllSkills from '../all_skills/all_skills';
//import css
import classSelector from './skills_main_content.module.css';

const Skills_main_content = (props) => {
    const [skills_main_content_data] = useState({
        skills_title_text:['Unlimitied Web', 'Development & Design', 'Skills.'],
        main_skills:['Frontend', 'Backend']
    });
    //map content
    const skills_title_text = skills_main_content_data.skills_title_text;
    const rendered_skills_title_text = skills_title_text.map((item, index) => {
        return <p className={classSelector.skills_text} key={item + index}>{item}</p>
    })
    
    //map button
    const main_skills = skills_main_content_data.main_skills;
    const skills_tab = main_skills.map((item, index) => {
        return <span className = {`${classSelector.home_skills_tab}`} key = {item + index}>{item}</span>
    })

    return(
        <div className={`${classSelector.skills_content_main_container} col-lg-6 col-md-6 col-sm-12`}>
            <div className={`${classSelector.skills_text_container}`}>
                {rendered_skills_title_text}
            </div>
            <div className={`${classSelector.skills_tab_container}`}>
                {skills_tab}
            </div>
            <AllSkills />
        </div>
    )
}

export default Skills_main_content;
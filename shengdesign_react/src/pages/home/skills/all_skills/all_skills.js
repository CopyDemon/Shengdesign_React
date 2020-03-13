import React, {useState} from 'react';

//import css
import classSelector from './all_skills.module.css';

const AllSkills = (props) =>{
    const[allSkillsState] = useState([
        {
            baisc_title : 'All Skills',
            frontend_title: 'Frontend Skills',
            backend_title: 'Background Skills'
        }
    ])
    return(
        <div className={`${classSelector.all_skills_main_container}`}>
            {/*title*/}
            <p className={`${classSelector.all_skills_title}`}>All Skills</p>

            <div className={`${classSelector.all_skills_content_container}`}>

            </div>
        </div>
    )
}

export default AllSkills;
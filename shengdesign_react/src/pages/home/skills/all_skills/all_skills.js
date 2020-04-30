import React, {useState} from 'react';

//import css
import classSelector from './all_skills.module.css';
//import js
import AllSkillsTitleSVG from './all_skills_title_svg/all_skills_title_svg';
const AllSkills = (props) =>{
    const[all_skills_state] = useState(
        {
            frontend_title: 'Frontend Skills',
            backend_title: 'Background Skills'
        }
    );
    
    if(props.show_skills){
        document.querySelector('.all_skills_main_container').style.display="block";
    }

    return(
        <div className={`${classSelector.all_skills_main_container} row col-lg-12 col-md-12 col-sm-12 px-0 mx-0`}>
            {/*title*/}
            <div className={`${classSelector.all_skills_bg}`}></div>
            <AllSkillsTitleSVG />
        </div>
    )
}

export default AllSkills;
import React, {useState} from 'react';

//import css
import classSelector from './all_skills.module.css';

const AllSkills = (props) =>{
    const[all_skills_state] = useState(
        {
            title : 'I know',
            frontend_title: 'Frontend Skills',
            backend_title: 'Background Skills'
        }
    );

    return(
        <div className={`${classSelector.all_skills_main_container} row col-lg-12 col-md-12 col-sm-12 px-0 mx-0`}>
            {/*title*/}
            <div className={`${classSelector.all_skills_bg}`}></div>
            <p className={`${classSelector.all_skills_title}`}>{all_skills_state.title}</p>

            {/* <div className={`${classSelector.all_skills_skills_container} col-lg-10 col-md-10 col-sm-12`}>

            </div> */}
        </div>
    )
}

export default AllSkills;
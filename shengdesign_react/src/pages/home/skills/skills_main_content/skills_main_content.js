import React, { useState, useEffect } from 'react';
//import redux
import {useSelector,useDispatch} from 'react-redux';
import {show_all_skills} from '../../../../REDUX/action/show_all_skills';

//import script
import AllSkills from '../all_skills/all_skills';

//import css
import classSelector from './skills_main_content.module.css';

const Skills_main_content = (props) => {
    //redux var
    const show_or_hide_all_skills = useSelector(state => state.skillsReducer);
    const dispatch = useDispatch();

    //state
    const [skills_main_content_data, set_skills_main_content_data] = useState({
        skills_title_text:['Unlimitied Web', 'Development & Design', 'Skills.'],
        main_skills:["let's view"]
    });

    //functions
    useEffect(()=>{
        //dispatch(show_all_skills())
        const show_all_skills = () =>{
            dispatch(show_all_skills())
            let all_skills_main_container = document.querySelector('.all_skills_main_container');
            if(show_or_hide_all_skills){
                all_skills_main_container.style.display = "true";
            }else{
                all_skills_main_container.style.display = "none";
            }
        }
    })

    

    //all maps
    //map content
    const skills_title_text = skills_main_content_data.skills_title_text;
    const rendered_skills_title_text = skills_title_text.map((item, index) => {
        return <p className={classSelector.skills_text} key={item + index}>{item}</p>
    })
    
    //map button
    const main_skills = skills_main_content_data.main_skills;
    const skills_tab = main_skills.map((item, index) => {
        return <span
                onClick={()=>{dispatch(show_all_skills())}} 
                className = {`${classSelector.home_skills_tab} view_skill_btn`} 
                key = {item + index}>
                    {item}
                </span>
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
import React, {useState} from 'react';

//import redux
import {useSelector,useDispatch} from 'react-redux';
import {hide_all_skills} from '../../../../REDUX/action/hide_all_skills';

//import css
import classSelector from './all_skills.module.css';
//import js
import HOC from '../../../../HOC/HOC';
import AllSkillsTitleSVG from './all_skills_title_svg/all_skills_title_svg';
import SkillsContent from './skills_content/skills_content';

//import image
// import img from "../../../../Assets/image/return_arrow.png"

const AllSkills = (props) =>{
    //redux var
    //get true or false for show or hide all skills
    const show_or_hide_all_skills = useSelector(state =>state.skillsReducer);
    const dispatch = useDispatch();
    //state
    const[all_skills_state] = useState(
        {
            frontend_title: 'Frontend Skills',
            backend_title: 'Background Skills'
        }
    );
    
    let all_skills_container;
    if(show_or_hide_all_skills){
        all_skills_container = 
                <div className={`${classSelector.all_skills_main_container} all_skills_main_container row col-lg-12 col-md-12 col-sm-12 px-0 mx-0`}>
                    <div className={`${classSelector.all_skills_bg}`}></div>
                    {/*title*/}
                    <AllSkillsTitleSVG />
                    {/*All Skill content*/}
                    <SkillsContent/>
                    {/*close btn*/}
                    <div className={`${classSelector.all_skills_close_btn}`}
                        //onclick trigger hide all skills action for redux from redux/action/hide_all_skills.js
                        onClick={()=>{dispatch(hide_all_skills())}}
                    >
                    </div>
                </div>
        
    }else{
        all_skills_container = "";
    }

    return(
        <HOC>
            {all_skills_container}
        </HOC>
    )
}

export default AllSkills;
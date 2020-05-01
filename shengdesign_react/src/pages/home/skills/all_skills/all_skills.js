import React, {useState} from 'react';

//import redux
import {useSelector,useDispatch} from 'react-redux';
import {hide_all_skills} from '../../../../REDUX/action/hide_all_skills';

//import css
import classSelector from './all_skills.module.css';
//import js
import AllSkillsTitleSVG from './all_skills_title_svg/all_skills_title_svg';
const AllSkills = (props) =>{
    //redux var
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
        all_skills_container = (() =>{
            // return(
            //     <div className={`${classSelector.all_skills_main_container} all_skills_main_container row col-lg-12 col-md-12 col-sm-12 px-0 mx-0`}>
            //         {/*title*/}
            //         <div className={`${classSelector.all_skills_bg}`}></div>
            //         <AllSkillsTitleSVG />
            //     </div>
            // )
            alert()
        })
    }

    return(
        <div className={`${classSelector.all_skills_main_container} all_skills_main_container row col-lg-12 col-md-12 col-sm-12 px-0 mx-0`}>
            {/*title*/}
            <div className={`${classSelector.all_skills_bg}`}></div>
            <AllSkillsTitleSVG />
            <div className={`${classSelector.all_skills_close_btn}`}
                 onClick={()=>{dispatch(hide_all_skills())}}
            >
                X
            </div>
        </div>
        // <div>
        //      {all_skills_container}
        // </div>
    )
}

export default AllSkills;
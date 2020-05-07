import  React,{useEffect} from 'react';

//import css
import classSelector from './design_element.module.css';

//import image
import adobe_suite_image from "../../../../Assets/image/adobe_suite.jpg";
import command_line_image from "../../../../Assets/image/Command-Line.jpg";
import deep_learning from "../../../../Assets/image/deep_learning.jpg";

    
const Skills_section_design_element = () =>{

    useEffect(()=>{
        const skills_design_element_mock_container = document.getElementById('skills_design_element_mock_container');

        //window scroll to skills design element trigger element animation by add className
        let scrollOn = false;
        window.onscroll = () =>{
            //targgle scrollOn bool base on skills design element scroll into view
            if(window.scrollY + window.innerHeight > skills_design_element_mock_container.getBoundingClientRect().top + skills_design_element_mock_container.clientHeight / 2 + 400){
                scrollOn = true;
            }else{
                scrollOn = false;
            }
            //base on scrollOn bool add or remove animation className
            if(scrollOn){
                //add animation className to skills_design_element_content_container_bg
                const skills_design_element_content_container_bg = document.getElementById("skills_design_element_content_container_bg");
                skills_design_element_content_container_bg.classList.add(`${classSelector.skills_design_element_content_container_bg_animtion}`)

                //add animation className to skill mock container
                const skills_design_element_mock_container = document.getElementById('skills_design_element_mock_container')

                skills_design_element_mock_container.classList.add(`${classSelector.skills_design_element_mock_container_animation}`)
                
                // console.log(scrollOn)
            }
            //here is remove animation className, I dont think we need this since user already see animation
            // else{
            //     //remove animation className to skills_design_element_content_container_bg
            //     const skills_design_element_content_container_bg = document.getElementById("skills_design_element_content_container_bg");
            //     skills_design_element_content_container_bg.classList.remove(`${classSelector.skills_design_element_content_container_bg_animtion}`)

            //     //remove animation className
            //     const skills_design_element_mock_container = document.getElementById('skills_design_element_mock_container')

            //     skills_design_element_mock_container.classList.remove(`${classSelector.skills_design_element_mock_container_animation}`)

            //     // console.log(scrollOn)
            // }
        }
    })
    return(
        <div className={`${classSelector.skills_desgin_element_container} col-lg-6 col-md-12 col-sm-12 px-0`} id="skills_desgin_element_container">
            <div className={`${classSelector.skills_design_element_content_container}`}>
                <div className={`${classSelector.skills_design_element_mock_container}`} id="skills_design_element_mock_container">
                    <div className={`${classSelector.skills_design_element_mock_inner_main_content_container}`}>
                        <p className={`${classSelector.skills_design_element_mock_inner_main_content_title}`}>
                            Excellence is not a skill, it's an attilude.
                        </p>
                        <p className={`${classSelector.skills_design_element_mock_inner_main_content_row_subtitle}`}>
                            Stand out online with a professional website, online store, and portfolio. With excellent development and design skills, I can turn any idea into a reality.
                        </p>

                        {/*ROW START*/}
                        <div className={`${classSelector.skills_design_element_mock_inner_main_content_row}`}>
                            {/*Adobe*/}
                            <img src={adobe_suite_image} alt="skills of adobe suite image" className={`${classSelector.skills_design_element_mock_inner_main_content_image} ${classSelector.image_align_right}`}/>
                            <p className={`${classSelector.skills_design_element_mock_inner_main_content_row_content} ${classSelector.content_box_align_left }`}>
                                Over five years of experience in Adobe Suite, I can easily create mockups for UI and UX in a short time.   
                            </p>
                        </div>

                         {/*Web Server*/}
                        <div className={`${classSelector.skills_design_element_mock_inner_main_content_row}`}>
                            {/*Adobe*/}
                            <img src={command_line_image} alt="skills of adobe suite image" className={`${classSelector.skills_design_element_mock_inner_main_content_image} ${classSelector.image_align_left}`}/>
                            <p className={`${classSelector.skills_design_element_mock_inner_main_content_row_content} ${classSelector.content_box_align_right }`}>
                                By mastering Linux, Nginx, Apache, and Shell Script, I can easily switch platforms and deploy my idea flexible.  
                            </p>
                        </div>
                        {/*AI*/}
                        <div className={`${classSelector.skills_design_element_mock_inner_main_content_row}`}>
                            <img src={deep_learning} alt="skills of adobe suite image" className={`${classSelector.skills_design_element_mock_inner_main_content_image} ${classSelector.image_align_right}`}/>
                            <p className={`${classSelector.skills_design_element_mock_inner_main_content_row_content} ${classSelector.content_box_align_left }`}>
                                Always try hard to touch the edge of technology. By study and making projects in TensorFlow PyTorch and ML5, I'm preparing to embrace the future.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className={`${classSelector.skills_design_element_content_container_bg}`} id="skills_design_element_content_container_bg"></div>
            </div>
        </div>
    )
}

export default Skills_section_design_element;
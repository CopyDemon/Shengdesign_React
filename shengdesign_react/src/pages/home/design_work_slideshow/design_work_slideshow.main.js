import React, { useState, useEffect }from 'react';

//import css
import classSelector from './design_work_slideshow.module.css';
//import image
//popmusic
import popmusicImg01 from '../../../Assets/image/home_work_slideshow/music01.jpg';
import popmusicImg02 from '../../../Assets/image/home_work_slideshow/music02.jpg';
import popmusicImg03 from '../../../Assets/image/home_work_slideshow/music03.jpg';
import popmusicImg04 from '../../../Assets/image/home_work_slideshow/music04.jpg';
import popmusicImg05 from '../../../Assets/image/home_work_slideshow/music05.jpg';
import popmusic_bg from '../../../Assets/image/home_work_slideshow/music_bg.jpg';

//FruitOne
import fruitOneImg01 from '../../../Assets/image/home_work_slideshow/fruitOne01.jpg';
import fruitOneImg02 from '../../../Assets/image/home_work_slideshow/fruitOne02.jpg';
import fruitOneImg03 from '../../../Assets/image/home_work_slideshow/fruitOne03.jpg';
import fruitOneImg04 from '../../../Assets/image/home_work_slideshow/fruitOne04.jpg';
import fruitOne_bg from '../../../Assets/image/home_work_slideshow/fruitOne_bg.jpg';

//Developer
import developerImg01 from '../../../Assets/image/home_work_slideshow/developer01.jpg';
import developerImg02 from '../../../Assets/image/home_work_slideshow/developer02.jpg';
import developerImg03 from '../../../Assets/image/home_work_slideshow/developer03.jpg';
import developerImg04 from '../../../Assets/image/home_work_slideshow/developer04.jpg';
import developer_bg from '../../../Assets/image/home_work_slideshow/developer_bg.jpg';

//Prevision
import previsionImg01 from '../../../Assets/image/home_work_slideshow/prevision01.jpg';
import previsionImg02 from '../../../Assets/image/home_work_slideshow/prevision02.jpg';
import previsionImg03 from '../../../Assets/image/home_work_slideshow/prevision03.jpg';
import previsionImg04 from '../../../Assets/image/home_work_slideshow/prevision04.jpg';
import prevision_bg from '../../../Assets/image/home_work_slideshow/prevision_bg.jpg';


const DesignWorkSlideShow = () =>{
        const [design_work_slideshow_state] = useState({
            popmusic : {
                image:[popmusicImg01,popmusicImg02,popmusicImg03,popmusicImg04,popmusicImg05],
                container_bg:popmusic_bg,
                name:"POPMusic",
                content:"",
                link:""
            },
            fruitOne : {
                image:[fruitOneImg01, fruitOneImg02, fruitOneImg03, fruitOneImg04],
                container_bg:fruitOne_bg,
                name:"FruitOne",
                content:"",
                link:""
            },
            developer : {
                image:[developerImg01, developerImg02, developerImg03, developerImg04],
                container_bg:developer_bg,
                name:"Developers",
                content:"",
                link:""
            },
            Prevision : {
                image:[previsionImg01, previsionImg02, previsionImg03, previsionImg04],
                container_bg:prevision_bg,
                name:"Prevision",
                content:"",
                link:""
            },
            // slide_number:1
        })

    const [design_work_slideshow_number_state, design_work_slideshow_number_setState] = useState(1);

    useEffect(()=>{
        //slideshow left and right arrow
        //var
        const design_work_left_arrow_container = document.getElementById('design_work_left_arrow_container');
        const design_work_right_arrow_container = document.getElementById('design_work_right_arrow_container');
        const design_work_each_main_container = document.querySelectorAll(`.design_work_each_main_container_selector`);
        //load current window width
        let window_width = window.innerWidth;
        let slide_count = 0;

        //load window width on resize
        window.addEventListener('resize', ()=>{
            window_width = window.innerWidth;
        })

        //left right arrow event listener
        design_work_right_arrow_container.addEventListener('click', ()=>{
            slide_count += 1;

            if(slide_count > Object.keys(design_work_slideshow_state).length - 1){
                slide_count = 0;
            }

            if(window.innerWidth > 600){
               design_work_each_main_container.forEach(el=>{
                    switch(slide_count){
                        case 0 :
                            el.style.left = "7%";
                            break;
                        case 1:
                            el.style.left = "-18%";
                            break;
                        case 2:
                            el.style.left = "-43%";
                            break;
                        case 3:
                            el.style.left = "-68%";
                            break;
                        default:
                            el.style.left = "7%";
                    }    
               })
            }else{
                design_work_each_main_container.forEach(el=>{
                    switch(slide_count){
                        case 0 :
                            el.style.left = "0";
                            break;
                        case 1:
                            el.style.left = `-25%`;
                            break;
                        case 2:
                            el.style.left = "-50%";
                            break;
                        case 3:
                            el.style.left = "-75%";
                            break;
                        default:
                            el.style.left = "0%";
                    }    
               })
            }
            // design_work_slideshow_number_setState(slide_count + 1);
        })

        design_work_left_arrow_container.addEventListener('click', ()=>{
            slide_count -= 1;
            if(slide_count < 0){
                slide_count = 3;
            }

            if(window.innerWidth > 600){
                design_work_each_main_container.forEach(el=>{
                     switch(slide_count){
                         case 0 :
                             el.style.left = "7%";
                             break;
                         case 1:
                             el.style.left = "-18%";
                             break;
                         case 2:
                             el.style.left = "-43%";
                             break;
                         case 3:
                             el.style.left = "-68%";
                             break;
                         default:
                             el.style.left = "7%";
                             console.log(slide_count);
                     }    
                })
             }else{
                 design_work_each_main_container.forEach(el=>{
                     switch(slide_count){
                         case 0 :
                             el.style.left = "0";
                             break;
                         case 1:
                             el.style.left = `-25%`;
                             break;
                         case 2:
                             el.style.left = "-50%";
                             break;
                         case 3:
                             el.style.left = "-75%";
                             break;
                         default:
                             el.style.left = "0%";
                     }    
                })
             }
        })
    })
    //functions
    //base on state map all works into their own container and display
    const all_works = Object.keys(design_work_slideshow_state).map((el, index)=>{
        return [...Array(design_work_slideshow_state[el])].map((el, index)=>{
           return(
                <div className={`${classSelector.design_work_each_main_container} design_work_each_main_container_selector`} key={`${el}_container`}>
                    <div className={`${classSelector.design_work_artboard}`} 
                         style={{backgroundImage: `url(${el.container_bg})`}}
                    >
                        <div style={{backgroundImage:`url(${el.image[2]})`}} 
                            key={`${el}${index}`} 
                            className={classSelector.design_work_show_bg}>
                        </div>
                        <p className={`${classSelector.design_work_title}`}
                           key={`${el.title}`}
                        >
                           {el.name}
                        </p>
                    </div>
                </div>
           )
        
        })
    })

    return (
        <section className={`${classSelector.design_work_slideshow_main_container} container-fluid px-0 mx-0`}>
            <p className={`${classSelector.design_work_slideshow_main_title}`}>Work Showcase Overview</p>
            <div className={`row col-lg-12 col-md-12 col-sm-12 px-0 mx-0`}>
                <div className={`${classSelector.design_work_container}`}>
                    {all_works}
                </div>
                <div className={classSelector.design_work_slideshow_arrow_container}>
                    {/*use p wrap i to make sure i has same height with content to vertical align center*/}
                    <p className={`${classSelector.design_work_left_arrow_container}`}
                       id="design_work_left_arrow_container"
                    >
                        <i className="fas fa-long-arrow-alt-left"></i>
                    </p>
                    <p>{design_work_slideshow_number_state} / 4</p>
                    <p className={`${classSelector.design_work_right_arrow_container}`}
                       id="design_work_right_arrow_container"
                    >
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default DesignWorkSlideShow;
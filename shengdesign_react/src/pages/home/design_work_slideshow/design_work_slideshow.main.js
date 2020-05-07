import React from 'react';

//import css
import classSelector from './design_work_slideshow.module.css';

const DesignWorkSlideShow = () =>{
    return (
        <section className={`${classSelector.design_work_slideshow_main_container} container-fluid px-0 mx-0`}>
            <p className={`${classSelector.design_work_slideshow_main_title}`}>Work Showcase Overview</p>
            <div className={`row col-lg-12 col-md-12 col-sm-12`}>
                
            </div>
        </section>
    )
}

export default DesignWorkSlideShow;
import React from 'react';

//import css
import classSelector from './Hoc_lg_banner_content_container.module.css';

const Hoc_lg_banner_content_container = (props) =>{
    return(
        <div className={`${classSelector.Hoc_lg_banner_content_container}`}>
            {props.children}
        </div>
    )
}

export default Hoc_lg_banner_content_container;
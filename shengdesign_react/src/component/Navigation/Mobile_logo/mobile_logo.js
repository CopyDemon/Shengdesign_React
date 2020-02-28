import React from 'react';

//import script
import classSelector from './mobile_logo.module.css';

const Mobile_logo = (props) =>{
    return (
        <span className={`${classSelector.mobile_logo}`} id="brand">
            <a href='/'>{props.brand_name}</a>
        </span>
    )
}

export default Mobile_logo;
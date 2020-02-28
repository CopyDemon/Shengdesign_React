import React from 'react';

import classSelector from './normal_logo.module.css';

const Site_Normal_logo = (props) =>{
    return(
        <a href="/" className={classSelector.logo_container}>
            <span className={classSelector.logo_inner_circle}>
                <p>{props.brand_name}</p>
            </span>
        </a>
    )
}

export default Site_Normal_logo;
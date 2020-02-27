import React from 'react';

//import css
import classSelector from './Hamburger_bar.module.css';

const Hamburger_bar = (props) =>{
    return (
        <span className={classSelector.hamburger_bar_container} onClick={props.openMobileNav}>
            <span></span>
            <span></span>
            <span></span>
        </span>
    )
}
export default Hamburger_bar;
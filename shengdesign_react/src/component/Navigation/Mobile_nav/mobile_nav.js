import React, {useEffect} from 'react';

//import script
import classSelector from './mobile_nav.module.css';
    const Mobil_nav = (props) =>{
        const nav_item = Object.keys(props.nav_data);
        const nav_li = nav_item.map((item) => {
            return(
                <li className={classSelector.mobile_nav_link} key={item}>
                    <a href={props.nav_data[item]}>{item}</a>
                </li>
            )
    });

    return(
        <section id="mobile_nav_main_container" className={`${classSelector.mobile_nav_main_container}`}>
            <div className={`${classSelector.mobile_nav_bg}`}></div>
            <div className={`justify-content-center`}>
                <nav className={`${classSelector.mobile_nav_container}`}>
                    {nav_li}
                </nav>
            </div>
            <div className={`${classSelector.close_button_container}`} onClick={props.close_mobile_nav}></div>
        </section>
    )
}

export default Mobil_nav;
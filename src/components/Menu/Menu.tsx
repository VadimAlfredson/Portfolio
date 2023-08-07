import React from 'react';
import s from './Menu.module.css'
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate()
    return (
        <div className={s.menu}>
            <div className={s.item}><NavLink to={'/main'} className={s.navText}>About me</NavLink></div>
          <div className={s.divider}>разделитель</div>
          <div className={s.item}><NavLink to={'/projects'} className={s.navText}>Projects</NavLink></div>
          <div className={s.divider}>разделитель</div>
          <div className={s.item}><NavLink to={'/contacts'} className={s.navText}>Contacts</NavLink></div>
        </div>
    );
};

export default Menu;
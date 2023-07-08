import React from 'react';
import s from '../Header.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={s.navbar}>
            <NavLink className={s.navLink} to={'/Main'}>Main</NavLink>
            <NavLink className={s.navLink} to={'/Projects'}>Projects</NavLink>
            <NavLink className={s.navLink} to={'/Contacts'}>Contacts</NavLink>
        </div>
    );
};

export default NavBar;
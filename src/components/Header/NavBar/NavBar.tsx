import React from 'react';
import s from '../Header.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={s.navbar}>
            <NavLink to={'/AboutMe'}>About me</NavLink>
            <NavLink to={'/Projects'}>Projects</NavLink>
            <NavLink to={'/Contacts'}>Contacts</NavLink>
        </div>
    );
};

export default NavBar;
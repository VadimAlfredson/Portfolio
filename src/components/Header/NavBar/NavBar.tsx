import React from 'react';
import s from '../Header.module.css'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NavBar = () => {
    const { t } = useTranslation()
    return (
        <div className={s.navbar}>
            <NavLink className={style => style.isActive ? s.navActive : s.navLink} to={'/Main'}>
                <p>{t("header.main")}</p>
            </NavLink>
            <NavLink className={style => style.isActive ? s.navActive : s.navLink} to={'/Projects'}>
                <p>{t("header.projects")}</p>
            </NavLink>
            <NavLink className={style => style.isActive ? s.navActive : s.navLink} to={'/Contacts'}>
                <p>{t("header.contacts")}</p>
            </NavLink>
        </div>
    );
};

export default NavBar;
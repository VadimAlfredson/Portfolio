import React from 'react';
import s from '../Header.module.css'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NavBar = () => {
    const { t } = useTranslation()
    return (
        <div className={s.navbar}>
            <NavLink className={s.navLink} to={'/Main'}>{t("header.main")}</NavLink>
            <NavLink className={s.navLink} to={'/Projects'}>{t("header.projects")}</NavLink>
            <NavLink className={s.navLink} to={'/Contacts'}>{t("header.contacts")}</NavLink>
        </div>
    );
};

export default NavBar;
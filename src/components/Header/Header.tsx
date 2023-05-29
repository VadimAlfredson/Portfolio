import React from 'react';
import NavBar from "./NavBar/NavBar";
import Language from "./Language/Language";
import s from "./Header.module.css"

const Header = () => {
    return <div className={s.header}>
        <NavBar />
        <Language />
    </div>
};

export default Header;
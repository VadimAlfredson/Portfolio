import React from 'react';
import NavBar from "./NavBar/NavBar";
import Theme from "./Theme/Theme";
import s from "./Header.module.css"
import {useTheme} from './../../hooks/use-theme'

const Header = () => {
    const {theme, setTheme} = useTheme()
    const handleThemeClick = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
    return <div className={s.header}>
        <NavBar/>
        <Theme handleThemeClick={handleThemeClick} theme={theme}/>
    </div>
};

export default Header;
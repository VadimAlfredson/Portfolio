import React from 'react';
import s from '../Header.module.css'

type PropsType = {
    theme: string
    handleThemeClick: (theme: ('dark' | 'light')) => void
}
const Theme = (props: PropsType) => {
let handleSelectThemeClick = () => {
   props.theme == 'dark' ? props.handleThemeClick('light') : props.handleThemeClick('dark')
}
    return (
        <button onClick={handleSelectThemeClick} className={s.theme}><img alt={'theme'} src={process.env.PUBLIC_URL + props.theme === 'dark' ? '/eclipse.png' : '/eclipseLight.png'}/></button>
    );
};

export default Theme;
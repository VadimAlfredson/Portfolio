import React from 'react';
import s from './Project.module.css'
import {useTranslation} from "react-i18next";

type PropsType = {
    name: string
}

const Project: React.FC<PropsType> = (props) => {
    const { t } = useTranslation()
    return (
        <div className={s.container}>
            <div className={s.photo}>
                <img alt={'project'}
                     src={'https://images04.nicepage.com/feature/511177/ru/create-any-website-with-powerful-website-builder-konstruktor-saytov.jpg'}
                /></div>
            <div className={s.information}>
                <div className={s.title}>{props.name}</div>
                <div className={s.information}>
                    {t(`projects.${props.name}`)}
                </div>
                <div className={s.links}>
                    <button>{t(`button.code`)}</button>
                    <button>{t(`button.site`)}</button>
                </div>
            </div>
        </div>
    );
};

export default Project;
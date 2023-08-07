import React from 'react';
import s from './Project.module.css'
import {useTranslation} from "react-i18next";

type PropsType = {
    item: {name: string, site: string}
}

const Project: React.FC<PropsType> = (props) => {
    const { t } = useTranslation()
    return (
        <div className={s.container}>
           {/* <div className={s.photo}>
                <img alt={'project'}
                     src={'https://images04.nicepage.com/feature/511177/ru/create-any-website-with-powerful-website-builder-konstruktor-saytov.jpg'}
                /></div>*/}
            <div className={s.information}>
                <div className={s.title}>{props.item.name}</div>
                <div className={s.description}>
                    {t(`projects.${props.item.site}`)}
                </div>
                <div className={s.links}>
                    <a href={`https://github.com/VadimAlfredson/${props.item.site}`} target={'_blank'} className={s.aStyle}><span className={s.spanStyle}>{t(`button.code`)}</span></a>
                    <a href={`https://vadimalfredson.github.io/${props.item.site}`} target={'_blank'} className={s.aStyle}><span className={s.spanStyle}>{t(`button.site`)}</span></a>
                </div>
            </div>
        </div>
    );
};

export default Project;
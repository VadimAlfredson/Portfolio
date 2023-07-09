import React, {useState} from 'react';
import s from '../Header.module.css'
import {useTranslation} from "react-i18next";

type LanguageType = "ru" | "en"

const Language = () => {
    const [languageValue, setLanguageValue] = useState<LanguageType>('ru')
    const {t, i18n} = useTranslation()
    let onLanguageChange = (language: LanguageType) => {
        setLanguageValue(language)
        i18n.changeLanguage(language)
    }

    return (
        <button
            onClick={() => onLanguageChange(languageValue == "ru" ? "en" : "ru")}
            className={s.theme}>
            {languageValue == "ru" ? "RU" : "EN"}
        </button>
    );
};

export default Language;
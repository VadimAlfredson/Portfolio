import React, {FC} from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18next";
import s from "./main.module.css"

const Main: FC = () => {
    const { t } = useTranslation();
    return <div><h1 className={s.name}>{t("main.name")}</h1>
    <p className={s.about}>{t("main.about")}</p>
    </ div>
}

export default Main
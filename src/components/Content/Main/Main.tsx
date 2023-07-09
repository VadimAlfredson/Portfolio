import React, {FC} from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18next"

const Main: FC = () => {
    const { t } = useTranslation();
    return <div>{t("main.name")}</ div>
}

export default Main
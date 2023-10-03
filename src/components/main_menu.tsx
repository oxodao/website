import { useTranslation } from "react-i18next";
import Colored from "./colored";

export default function MainMenu () {
    const {t} = useTranslation();

    return <div id="main_menu" className="primary">
        <ul>
            <li><a href="#aboutme"><Colored color="BLUE">{t('about_me.title')}</Colored></a></li>
            <li><a href="#projects"><Colored color="BLUE">{t('projects.title')}</Colored></a></li>
            <li><a href="#contact"><Colored color="BLUE">{t('contact.title')}</Colored></a></li>
        </ul>
    </div>
}
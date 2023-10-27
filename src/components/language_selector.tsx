import Flag from "./flag";
import '../assets/css/flag.css';
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
    const {i18n} = useTranslation();
    const [selectorOpen, setSelectorOpen] = useState<boolean>(false);

    const onClick = (lang: string) => {
        i18n.changeLanguage(lang);
        setSelectorOpen(false);
    };

    return <div className="LanguageSelector">
        { i18n.language === 'fr' && <Flag country="FR" onClick={() => setSelectorOpen(!selectorOpen)} /> }
        { i18n.language === 'en' && <Flag country="US" onClick={() => setSelectorOpen(!selectorOpen)} /> }

        {
            selectorOpen &&
            <div className="LanguageSelector__Selector">
                <Flag country="FR" onClick={() => onClick('fr')} />
                <Flag country="US" onClick={() => onClick('en')}/>
            </div>
        }
    </div>
}
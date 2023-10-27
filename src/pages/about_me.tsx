import { Trans, useTranslation } from "react-i18next";
import Colored from "../components/colored";

export default function AboutMe() {
    const {i18n} = useTranslation();

    return <section id="aboutme" className="main_content">
        <div>
            <h1><Colored color="GREEN">0x01. <Trans i18nKey="about_me.title"></Trans></Colored></h1>
            <p>
                <Trans i18n={i18n} i18nKey="about_me.line1">
                    Curious, passionate about programming and solving problems, I spend my free time tinkering and building my personal projects.
                </Trans>
            </p>
            <p>
                <Trans i18n={i18n} i18nKey="about_me.line2">
                    After an IT degree at the <Colored color="BLUE">Reims "Institut universitaire de technologie"</Colored>,
                    I graduated a computer science engineering diploma at the <Colored color="BLUE">Cnam</Colored>
                </Trans>
            </p>
            <p>
                <Trans i18n={i18n} i18nKey="about_me.line3">
                    I worked at <a className="colored RED" href="https://un-zero-un.fr/" target="_blank" rel="norefferer noopener">Un-zéro-un</a> part-time, a digital agency located in Charleville-Mézières. 
                    I then went on to work at <a className="colored RED" href="https://spacefoot.com" target="_blank" rel="norefferer noopener">Spacefoot</a> in the e-commerce team, focusing on integrating with the various marketplaces.
                </Trans>
            </p>
        </div>
    </section>
}
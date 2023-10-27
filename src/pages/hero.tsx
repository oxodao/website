import { Trans, useTranslation } from 'react-i18next';
import '../assets/css/hero.css';
import Colored from '../components/colored';

export default function Hero() {
    const {i18n} = useTranslation();

    return <section className="hero">
        <h1 className="content">
            <Trans i18n={i18n} i18nKey={"hero.iam"} name="Nathan JANCZEWSKI">
                I'm <Colored color="BLUE">Nathan JANCZEWSKI</Colored>.
            </Trans>
        </h1>
        <h2 className="content">
            <Trans i18n={i18n} i18nKey="hero.title"></Trans>
        </h2>
        <a className="content button" href="#aboutme">
            <Trans i18n={i18n} i18nKey="about_me.title"></Trans>
        </a>
    </section>
}
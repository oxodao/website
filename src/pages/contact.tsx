import { Trans, useTranslation } from "react-i18next";
import Colored from "../components/colored";
import { IS_LOOKING_FOR_JOB } from "../main";

export default function Contact() {
    const {i18n} = useTranslation();

    return <section id="contact" className="main_content">
        <div>
            <h1><Colored color="GREEN">0x03. <Trans i18nKey="contact.title"></Trans></Colored></h1>
            <p>
                <Trans i18n={i18n} i18nKey={IS_LOOKING_FOR_JOB ? 'contact.line1_l4j' : 'contact.line1_nl4j'}>
                    Want to reach out?
                </Trans>
            </p>

            <p style={{textAlign: 'initial'}}>
                <Trans i18n={i18n} i18nKey="contact.line2">Contact me by email at</Trans>
                &nbsp;<Colored color="GREEN"><a href="mailto:nathan@janczewski.fr">nathan@janczewski.fr</a></Colored>
            </p>
            <p>
                <Trans i18n={i18n} i18nKey="contact.line3">
                    You can also find me on <a className="colored GREEN" href="https://github.com/oxodao" target="_blank" rel="norefferer noopener">Github</a>, <a className="colored GREEN" href="https://x.com/oxodao" target="_blank" rel="norefferer noopener">Twitter</a> and <a className="colored GREEN" href="https://www.linkedin.com/in/nathan-janczewski-5736b2131/" target="_blank" rel="norefferer noopener">Linkedin</a>
                </Trans>
            </p>
        </div>
    </section>
}
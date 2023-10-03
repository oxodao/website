import { Trans } from 'react-i18next';
import '../assets/css/footer.css';

export default function Footer() {
    return <section id="footer">
        <div className="inner">
            <h1><Trans i18nKey="credits.title"></Trans></h1>
            <ul>
                <li><Trans i18nKey="credits.font"></Trans>: <a href="https://fonts.google.com/specimen/Montserrat" target="_blank" rel="norefferer noopener">Montserrat</a></li>
                <li><Trans i18nKey="credits.hero_img">Hero image by <a href="https://unsplash.com/fr/photos/j_mabn34oRQ" target="_blank" rel="norefferer noopener">Danny Nanni</a> on Unsplash</Trans></li>
                <li><Trans i18nKey="credits.design">Design inspired by <a href="https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode" target="_blank" rel="norefferer noopener">Robb Owen's Synthwave84</a> VSCode theme</Trans></li>
            </ul>
        </div>
    </section>
}
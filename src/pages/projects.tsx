import { Trans, useTranslation } from "react-i18next";
import Colored from "../components/colored";
import Project from "../components/project";
import { IS_LOOKING_FOR_JOB } from "../main.tsx";
import { Project as ProjectObj } from '../types/project.ts';

{/* @TODO add a "other projects" page or a "smaller projects" so that I can add all my projects that I don't want on the main page */ }
export default function Projects() {
    const { t, i18n } = useTranslation();

    const professional_projects: ProjectObj[] = [
        {
            image: 'tarif',
            title: 'tarif',
            description: <>
                <p>
                    <Trans i18n={i18n} i18nKey="projects.tarif.line1">
                        While at <a className="colored RED" href="https://multi-impact.com/" target="_blank" rel="noreferrer noopener">Multi-Impact</a>, I mainly worked on the "Tarificateur".
                    </Trans>
                </p>
                <p><Trans i18n={i18n} i18nKey="projects.tarif.line2">It's an internal tool that contains all the insurance companies' products and makes the calculations for a given person depending on lots of parameters.</Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.tarif.line3">One of the big task I'm working on is the migration of the whole API from GraphQL to Rest.</Trans></p>
                <p>{t('projects.built_with')} Api-Platform + VueJS ({t('projects.tarif.will_be_migrated')})</p>
            </>,
            links: [],
        },
        {
            image: 'mpi',
            title: 'mpi',
            description: <>
                <p>
                    <Trans i18n={i18n} i18nKey="projects.mpi.line1">
                        While at <a className="colored RED" href="https://spacefoot.com/" target="_blank" rel="noreferrer noopener">Spacefoot</a>, most of my work was around this tool.
                    </Trans>
                </p>
                <p><Trans i18n={i18n} i18nKey="projects.mpi.line2">It is used to synchronize offers on multiple marketplaces and facilitate product creation among other things</Trans></p>
                <p>{t('projects.built_with')} Svelte + Django</p>
            </>,
            links: [],
        },
        {
            image: 'deal_and_co',
            title: 'deal_and_co',
            description: <>
                <p>
                    <Trans i18n={i18n} i18nKey="projects.deal_and_co.line1">
                        During my part-type at <a className="colored RED" href="https://un-zero-un.fr/" target="_blank" rel="noreferrer noopener">Un-zéro-un</a>, I worked on the API for our Deal&Co client.
                    </Trans>
                </p>
                <p><Trans i18n={i18n} i18nKey="projects.deal_and_co.line2">This mobile app lets you find discounts, gifts, ... with the partners around you.</Trans></p>
                <p>{t('projects.built_with')} React + API-Platform</p>
            </>,
            links: 'projects.defunct',
        },
        {
            image: 'gescicca',
            title: 'gescicca',
            description: <>
                <p><Trans i18n={i18n} i18nKey="projects.gescicca.line1">Developed by the <Colored color="BLUE">Lab'S DN</Colored> at the <Colored color="BLUE">Cnam</Colored>, Gescicc@ is the student management tool on which I worked during my first two years of part-time.</Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.gescicca.line2">It solves every use-case a Cnam center can have and is used by every one of them in the world.</Trans></p>
                <p>{t('projects.built_in')} ASP.NET webforms</p>
            </>,
            links: [],
        },
        {
            image: 'cotemeuse',
            title: 'cotemeuse',
            description: <>
                <p><Trans i18n={i18n} i18nKey="projects.cotemeuse.line1">After my internship, I worked one more month at Un-zéro-un. I had the chance to work on the Côté-Meuse marketplace.</Trans></p>
                <p>{t('projects.built_in')} React + Symfony / API-Platform</p>
            </>,
            links: [{ name: 'website', url: 'https://www.cote-meuse.fr' }]
        }
    ];

    const personal_projects: ProjectObj[] = [
        {
            image: 'partyhall',
            title: 'partyhall',
            description: <>
                <p><Trans i18n={i18n} i18nKey="projects.partyhall.line1"></Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.partyhall.line2"></Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.partyhall.line3"></Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.partyhall.line4"></Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.partyhall.line5"></Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.partyhall.line6"></Trans></p>
                <p>{t('projects.built_in')} React+Golang (PartyHall), React+API-Platform (PartyNexus)</p>
            </>,
            links: [
                { name: 'github', url: 'https://github.com/partyhall' },
                { name: 'website', url: 'https://partyhall.github.io' },
            ],
        },
        {
            image: 'prowty',
            title: 'prowty',
            description: <>
                <p><Trans i18n={i18n} i18nKey="projects.prowty.line1">Not available yet, this project is a platform to plan events with friends</Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.prowty.line2">The goal of it is to centralize every aspect you want when preparing a party, a trip or anything</Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.prowty.line3">Money repartition, tasks to do, sharing pictures of the trips, etc...</Trans></p>
                <p>{t('projects.built_in')} React + Django-rest-framework</p>
            </>,
            links: [],
        },
        {
            image: 'metaprint',
            title: 'metaprint',
            description: <>
                <p><Trans i18n={i18n} i18nKey="projects.metaprint.line1">Simple tool to print out info about your computer (Ram usage, CPU temperature, ...), useful for i3 and tmux.</Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.metaprint.line2">I wanted to have a simple yet configurable tool to take care of this, that could also handle multiple computers without any external dependencies.</Trans></p>
                <p>{t('projects.built_in')} Golang</p>
            </>,
            links: [
                { name: 'github', url: 'https://github.com/oxodao/metaprint' },
                { name: 'aur', url: 'https://aur.archlinux.org/packages/metaprint-bin' }
            ],
        },
        {
            image: 'cao',
            title: 'cao',
            description: <>
                <p><Trans i18n={i18n} i18nKey="projects.cao.line1">Cards Against Humanity is an open-source card game, similar to Blanc Manger Coco or Limite Limite</Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.cao.line2">This version lets you play with your friends online</Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.cao.line3">For legal reasons, the cards are not given but a JSON format lets you easily import your decks</Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.cao.line4">A new version in React was started but it's still WIP</Trans></p>
                <p>{t('projects.built_in')} VueJS + Golang (with websockets)</p>
            </>,
            links: [
                { name: 'github_next', url: 'https://github.com/oxodao/CardsAgainstOverflow' },
                { name: 'github', url: 'https://github.com/oxodao/CardsAgainstOverflow-legacy' },
            ],
        },
        {
            image: 'tpbt',
            title: 'tpbt',
            description: <>
                <p><Trans i18n={i18n} i18nKey="projects.tpbt.line1">This software was designed to be hosted and used as a SaaS by streamers wanting to create blind-tests</Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.tpbt.line2">A score system and a leaderboard was implemented, everything being automated through the Twitch API</Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.tpbt.line3">Originally created for the JosetteLaChèvre streamer, it unfortunately did not end up used.</Trans></p>
                <p>{t('projects.built_in')} VueJS + Golang</p>
            </>,
            links: [
                { name: 'jlc_twitch', url: 'https://www.twitch.tv/josettelachevre' },
                { name: 'github', url: 'https://github.com/oxodao/TPBT' },
            ],
        },
        {
            image: 'sd',
            title: 'snapdesk',
            description: <>
                <p><Trans i18n={i18n} i18nKey="projects.snapdesk.line1">One of the first thing I ever programmed</Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.snapdesk.line2">SnapDesk was a Snapchat client for the desktop, built in Java</Trans></p>
                <p><Trans i18n={i18n} i18nKey="projects.snapdesk.line3">Everything was functional, though since the huge restrictions added by <Colored color="BLUE">Snap Inc.</Colored> on their API at the beggining of 2014, it was not feasible to continue this project.</Trans></p>
            </>,
            links: [],
        },
    ];

    return <section id="projects" className="main_content">
        <div>
            <h1><Colored color="GREEN">0x02. {t('projects.title')}</Colored></h1>

            <h2 style={{ marginTop: '1em' }}><Colored color="YELLOW">{t('projects.pro')}</Colored></h2>
            {
                IS_LOOKING_FOR_JOB && <Project project={{
                    image: 'your_company',
                    title: 'your_company',
                    description: <>
                        <p><Trans i18n={i18n} i18nKey="projects.your_company.line1">I'm currently looking for a job. Let's build something cool together !</Trans></p>
                    </>,
                    links: [
                        { name: 'contact_me', url: '#contact' }
                    ],
                }}
                />
            }
            {professional_projects.map(x => <Project project={x} key={x.title} />)}

            <h2><Colored color="YELLOW">{t('projects.perso')}</Colored></h2>
            {personal_projects.map(x => <Project project={x} key={x.title} />)}
        </div>
    </section>
}
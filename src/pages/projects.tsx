import Colored from "../components/colored";
import Project from "../components/project";
import { IS_LOOKING_FOR_JOB } from "../main.tsx";
import { Project as ProjectObj } from '../types/project.ts';

const professional_projects: ProjectObj[] = [
    {
        image: 'mpi',
        title: 'MP Integrator',
        description: <>
            <p>While at <a href="https://spacefoot.com/" target="_blank" rel="noreferrer noopener"><Colored color="RED">Spacefoot</Colored></a>, most of my work was around this tool.</p>
            <p>It is used to synchronize offers on multiple marketplace and facilitate product creation among other things</p>
            <p>Built in Svelte + Django</p>
        </>,
        links: [],
    },
    {
        image: 'deal_and_co',
        title: 'Deal&Co',
        description: <>
            <p>During my part-type at <a href="https://un-zero-un.fr/" target="_blank" rel="noreferrer noopener"><Colored color="RED">Un-zéro-un</Colored></a>, I worked on the API for our Deal&Co client.</p>
            <p>This mobile app lets you find discounts, gifts, ... with the partners around you.</p>
            <p>Built in React + API-Platform</p>
        </>,
        links: [
            {name: 'Apple Store', url: 'https://apps.apple.com/fr/app/deal-co/id1559608376'},
            {name: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.deal_and_co.app'},
            {name: 'Website', url: 'https://www.deal-and-co.com/'},
        ],
    },
    {
        image: 'gescicca',
        title: 'Gescicc@',
        description: <>
            <p>Developed by the <Colored color="BLUE">Lab'S DN</Colored> at the <Colored color="BLUE">Cnam</Colored>, Gescicc@ is the student management tool on which I worked during my first two years of part-time.</p>
            <p>It solves every use-case a Cnam center can have and is used by every one of them in the world.</p>
            <p>Built in ASP.NET webforms</p>
        </>,
        links: [],
    },
    {
        image: 'cotemeuse',
        title: 'Côté-Meuse',
        description: <>
            <p>After my internship, I worked one more month at Un-zéro-un. I had the chance to work on the Côté-Meuse marketplace.</p>
            <p>Built in React + Symfony / API-Platform</p>
        </>,
        links: [{name: 'Website', 'url': 'https://www.cote-meuse.fr'}]
    }
];

const personal_projects: ProjectObj[] = [
    {
        image: 'prowty',
        title: 'Prowty',
        description: <>
            <p>Not available yet, this project is a platform to plan events with friends</p>
            <p>The goal of it is to centralize every aspect you want when preparing a party, a trip or anything</p>
            <p>Money repartition, tasks to do, sharing pictures of the trips, etc...</p>
            <p>Built in React + Django-rest-framework</p>
        </>,
        links: [],
    },
    {
        image: 'cao',
        title: 'Cards Against Overflow',
        description: <>
            <p>Cards Against Humanity is an open-source card game, similar to Blanc Manger Coco or Limite Limite</p>
            <p>This version lets you play with your friends online</p>
            <p>For legal reasons, the cards are not given but a JSON format lets you easily import your decks</p>
            <p>Built in VueJS + Golang (with websockets), the project is not yet available</p>
        </>,
        links: [],
    },
    {
        image: 'tpbt',
        title: 'TwitchPlaysBlindtest',
        description: <>
            <p>This software was designed to be hosted and used as a SaaS by streamers wanting to create blind-tests</p>
            <p>A score system and a leaderboard was implemented, everything being automated through the Twitch API</p>
            <p>Originally created for the JosetteLaChèvre streamer, it unfortunately did not end up used.</p>
        </>,
        links: [
            { name: 'Github', url: 'https://github.com/oxodao/TPBT' },
            { name: 'Twitch JosetteLaChèvre', url: 'https://www.twitch.tv/josettelachevre'}
        ],
    },
    {
        image: 'sd',
        title: 'SnapDesk',
        description: <>
            <p>One of the first thing I ever programmed</p>
            <p>SnapDesk was a Snapchat client for the desktop, built in Java</p>
            <p>Everything was functional, though since the huge restrictions added by <Colored color="BLUE">Snap Inc.</Colored> on their API at the beggining of 2014, it was not feasible to continue this project.</p>
        </>,
        links: [],
    },
    {
        image: 'ytc',
        title: 'YoutubeClock',
        description: <>
            <p>Small <Colored color="BLUE">TemperMonkey</Colored> plugin adding a clock in the Youtube player</p>
            <p>This lets you seeing the time without closing the full-screen video you're watching</p>
        </>,
        links: [
            { name: 'Github', url: 'https://github.com/oxodao/youtubeclock' },
            { name: 'Download', url: 'https://greasyfork.org/fr/scripts/378136-youtubeclock'}
        ],
    },
]

export default function Projects() {
    return <section id="projects" className="main_content">
        <div>
            <h1><Colored color="GREEN">0x02. Projects</Colored></h1>

            <h2 style={{marginTop: '1em'}}><Colored color="YELLOW">Professional projects</Colored></h2>
            {
                IS_LOOKING_FOR_JOB && <Project project={{
                        image: 'your_company',
                        title: 'Your company',
                        description: <>
                            <p>I'm currently looking for a job. Let's build something cool together !</p>
                        </>,
                        links: [
                            {name: 'Contact me!', url: '#contact'}
                        ],
                    }}
                />
            }
            { professional_projects.map(x => <Project project={x} key={x.title} />) }

            <h2><Colored color="YELLOW">Personal projects</Colored></h2>
            { personal_projects.map(x => <Project project={x} key={x.title} />) }
        </div>
    </section>
}
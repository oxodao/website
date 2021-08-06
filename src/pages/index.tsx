import '../assets/css/app.scss';
import Project from '../components/project';

import ProjectList from '../components/project_list';
import TextBlock   from '../components/text_block';
import Link        from "../components/link";

import ImageDC        from '../assets/images/deal_and_co.png';
import ImageGsc       from '../assets/images/gescicca.png';
import ImageCoteMeuse from '../assets/images/cotemeuse.png';
import ImageScinna    from '../assets/images/scinna.png';
import ImageCAO       from '../assets/images/cao.png';
import ImageTPBT      from '../assets/images/tpbt.png';
import ImageFQ        from '../assets/images/fq.png';
import ImageSD        from '../assets/images/sd.png';
import ImageYTCLK     from '../assets/images/ytclk.png';
import ImageSATF      from '../assets/images/satf.png';
import ImageZS        from '../assets/images/zs.png';

import ImageGithub   from '../assets/images/github.png';
import ImageLinkedin from '../assets/images/linkedin.png';
import ImageTwitter  from '../assets/images/twitter.png';

export default function Index() {
    return <>
        <TextBlock title={<h1 className="title">Nathan <span className="green">{'<Oxodao>'}</span> JANCZEWSKI</h1>}>
            <p>23 ans, <span className="blue">curieux</span> et <span className="blue">passioné de développement</span>,
                je passe beaucoup de mon temps libre à "bidouiller" et travailler sur mes projets persos.</p>
            <p>Après un <span className="blue">baccalauréat scientifique</span>, j'ai obtenu mon <span className="blue">DUT Informatique</span> à
                l'IUT de Reims, puis mon diplôme d'ingénieur en informatique spécialité Systèmes d'informations au <span
                    className="blue">Cnam</span>.</p>
            <p>J'ai pour cela effectué mon alternance chez <a className="blue" target="_blank" rel="noreferrer"
                                                              href="https://un-zero-un.fr/">Un-zéro-un</a>, une agence
                de communication située à Charleville-Mézières</p>
        </TextBlock>
        <TextBlock title={"Contact"}>
            <p className="Contact__Email blue">Email: <a className='green' href="mailto:nathan@janczewski.fr">nathan@janczewski.fr</a></p>
            <div className="Contact__List">
                <Link to={"https://github.com/oxodao"} text="" style="Icon" icon={ImageGithub}/>
                <Link to={"https://twitter.com/oxodao"} text="" style="Icon" icon={ImageTwitter}/>
                <Link to={"https://www.linkedin.com/in/nathan-janczewski-5736b2131/"} text="" style="Icon" icon={ImageLinkedin}/>
            </div>
        </TextBlock>
        <ProjectList title="Projets professionnels"
                     description="Voici la liste des projets sur lesquels j'ai travaillé lors de ma vie professionnelle">
            <Project title="Deal&Co" image={ImageDC} links={{
                'Apple Store': 'https://apps.apple.com/fr/app/deal-co/id1559608376',
                'Play Store': 'https://play.google.com/store/apps/details?id=com.deal_and_co.app',
                'Site web': 'https://www.deal-and-co.com/',
            }}>
                <p>Durant mon alternance, j'ai travaillé sur l'API de notre client Deal & Co</p>
                <p>Cette application mobile permet de trouver des réductions, cadeaux, ... chez les partenaires autour
                    de vous.</p>
            </Project>
            <Project title="Gescicc@" image={ImageGsc}>
                <p>Développé par le <span className="blue">Lab'S DN</span> au <a rel="noreferrer" target="_blank"
                                                                                 className="blue"
                                                                                 href="https://cnam.fr/">CNAM</a>,
                    Gescicc@ est le logiciel de gestion de scolarité auquel j'ai participé durant mes deux premières
                    années d'alternance.</p>
                <p>Il permet une gestion exaustive des besoins d'un centre et est utilisé par la plus grande majorité
                    des centres CNAM dans le monde.</p>
            </Project>
            <Project title="Coté-Meuse" image={ImageCoteMeuse} links={{'Site web': 'https://www.cote-meuse.fr/'}}>
                <p>Après mon stage, je suis resté un mois chez <a rel="noreferrer" target="_blank" className="blue"
                                                                  href="https://un-zero-un.fr/">Un-zéro-un</a>. J'ai eu
                    l'occasion de travailler entre autre sur le marketplace Coté-Meuse</p>
                <p>J'ai ajouté certaines fonctionnalités au panel administrateur / marchand.</p>
            </Project>
        </ProjectList>

        <ProjectList title="Projets personnels"
                     description="Voici la liste des projets que j'ai effectué sur mon temps libre.">
            <Project title="Scinna" image={ImageScinna}
                     links={{'Github': 'https://github.com/scinna', 'Site web': 'https://scinna.app/'}}>
                <p>
                    Scinna est un logiciel permettant de partager ses captures d'écrans.
                </p>
                <p>
                    Le but de cette application est de pouvoir l'héberger soi-même simplement tout en ayant des
                    fonctionnaités complètes et utiles. Scinna fait parti d'un groupement d'applications: Scinna (Le
                    serveur), Scinnapse (L'application bureau), Scinnamon (L'application mobile) et CLIent (Le client
                    terminal).
                </p>
                <p>
                    Développé en Golang et React, il s'agit de mon plus gros projet personnel à ce jour.
                </p>
            </Project>
            <Project title="Cards Against Overflow" image={ImageCAO}>
                <p>Cards Against Humanity est un jeu de carte opensource (équivalent à BlancMangerCoco ou Limite
                    Limite).</p>
                <p>Cette version permet de jouer en ligne avec ses amis à ce jeu.</p>
                <p>Pour des raisons de légalité, les cartes ne sont pas fournies mais un format json permet d'importer
                    facilement vos decks personnels</p>
                <p>Développé en Golang et VueJS avec les websockets, le projet n'est pas disponible publiquement pour
                    l'instant.</p>
            </Project>
            <Project title="TwitchPlaysBlindTest" image={ImageTPBT} links={{
                'Github': 'https://github.com/oxodao/TPBT',
                'Twitch JosetteLaChèvre': 'https://www.twitch.tv/josettelachevre'
            }}>
                <p>Ce logiciel destiné à être hébergé et utilisé en SaaS par des streameurs permet de créer des blind
                    test</p>
                <p>Un système de score et de leaderboard à été implémenté, tout étant automatisé avec l'API Twitch</p>
                <p>Créé pour la chaine de JosetteLaChèvre, son utilisation sera étendue à d'autres une fois jugé
                    stable.</p>
            </Project>
            <Project title="FriendQuest" image={ImageFQ} links={{'Github': 'https://github.com/oxodao/friendquest'}}>
                <p>Jeu de quizz sur ses amis, clone opensource de The Test (en pause)</p>
            </Project>
            <Project title="SnapDesk" image={ImageSD}>
                <p>SnapDesk était un client Snapchat que j'avais développé pour le PC en Java.</p>
                <p>Tout était fonctionnel, cependant avec les fortes restrictions établies par <span className="blue">Snap Inc.</span> dès
                    2014 ont été beaucoup trop problématiques pour continuer ce projet.</p>
            </Project>
            <Project title="YoutubeClock" image={ImageYTCLK} links={{
                'Github': 'https://github.com/oxodao/youtubeclock',
                'Téléchargement': 'https://greasyfork.org/fr/scripts/378136-youtubeclock'
            }}>
                <p>Petit plugin <a rel="noreferrer" target="_blank" className="green"
                                   href="https://addons.mozilla.org/fr/firefox/addon/tampermonkey/">TemperMonkey</a> permettant
                    d'ajouter une horloge dans la barre de vidéos de Youtube</p>
                <p>Cela permet de ne pas avoir à sortir du plein-écran pour lire l'heure.</p>
            </Project>
        </ProjectList>

        <ProjectList title="Projets divers"
                     description="Voici mes projets divers, ce sont des projets personnels qui ne vont pas dans les autres catégories.">
            <Project title="Synthwave All the Things" image={ImageSATF}
                     links={{'Github': 'https://github.com/oxodao/synthwave-themed-sites'}}>
                <p>Le thème <a rel="noreferrer" target="_blank" className="green"
                               href="https://github.com/robb0wen/synthwave-vscode">Synthwave de robb0wen</a> pour Visual
                    Studio Code fait parti de mes préférés. Je m'en suis fortement inspiré pour créer ce site.</p>
                <p>J'ai ensuite décidé de créer des thèmes Stylus pour divers sites web.</p>
                <p>Pour l'instant, <a rel="noreferrer" target="_blank" className="blue"
                                      href="https://news.ycombinator.com/">HackerNews</a>, <a rel="noreferrer"
                                                                                              target="_blank"
                                                                                              className="blue"
                                                                                              href="https://lobste.rs/">Lobste.rs</a> et
                    bientôt <a rel="noreferrer" target="_blank" className="blue" href="https://twitter.com">Twitter</a>.
                </p>
            </Project>
            <Project title="Zippo Stand" image={ImageZS}
                     links={{'Github': 'https://www.thingiverse.com/thing:3832165'}}>
                <p>Un petit stand à Zippo à imprimer en 3D pour pouvoir exposer sa collection</p>
            </Project>
        </ProjectList>
    </>;
}
import Colored from "../components/colored";

export default function AboutMe() {
    return <section id="aboutme" className="main_content">
        <div>
            <h1><Colored color="GREEN">0x01. About me</Colored></h1>
            <p>
                Curious, passionate about programming and solving problems, I spend my free time tinkering and building my personal projects.
            </p>
            <p>
                After an IT degree at the <Colored color="BLUE">Reims "Institut universitaire de technologie"</Colored>,
                I graduated a computer science engineering diploma at the <Colored color="BLUE">Cnam</Colored>
            </p>
            <p>
                I worked at <a href="https://un-zero-un.fr/" target="_blank" rel="norefferer noopener"><Colored color="RED">Un-zéro-un</Colored></a> part-time, a digital agency located in Charleville-Mézières. 
                I then went on to work at <a href="https://spacefoot.com" target="_blank" rel="norefferer noopener"><Colored color="RED">Spacefoot</Colored></a> in the e-commerce team, focusing on integrating with the various marketplaces.
            </p>
        </div>
    </section>
}
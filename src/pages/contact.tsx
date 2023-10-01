import Colored from "../components/colored";
import { IS_LOOKING_FOR_JOB } from "../main";

export default function Contact() {
    return <section id="contact" className="main_content">
        <div>
            <h1><Colored color="GREEN">0x03. Contact</Colored></h1>
            { IS_LOOKING_FOR_JOB && <p>Did I peak your interest ? I'm looking for a job, contact me !</p> }
            { !IS_LOOKING_FOR_JOB && <p>Want to reach out ?</p> }

            <p style={{textAlign: 'initial'}}>
                Contact me by email at <Colored color="GREEN"><a href="mailto:nathan@janczewski.fr">nathan@janczewski.fr</a></Colored>
            </p>
            <p>
                You can also find me on <Colored color="GREEN"><a href="https://github.com/oxodao" target="_blank" rel="norefferer noopener">Github</a></Colored>, <Colored color="GREEN"><a href="https://x.com/oxodao" target="_blank" rel="norefferer noopener">Twitter</a></Colored> and <Colored color="GREEN"><a href="https://www.linkedin.com/in/nathan-janczewski-5736b2131/" target="_blank" rel="norefferer noopener">Linkedin</a></Colored>
            </p>
        </div>
    </section>
}
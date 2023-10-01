import { Project as ProjectObj } from "../types/project";
import '../assets/css/project.css';
import Colored from "./colored";

type Props = {
    project: ProjectObj;
}

export default function Project({project}: Props) {
    return <article className="Project">
        <img src={`/assets/${project.image}.avif`} alt={project.title} />
        <div className="Project__Content">
            <h3><Colored color="YELLOW">{project.title}</Colored></h3>
            {project.description}
        </div>
        <div className="Project__Links">
            {
                project.links && project.links.length > 0 && project.links.map(x => <a href={x.url} key={x.name}><Colored color="GREEN">{x.name}</Colored></a>)
            }
            {
                (!project.links || project.links.length === 0)
                && !project.placeholder
                && <p>Not available publicly</p>
            }
        </div>
    </article>
}
import { useTranslation } from "react-i18next";
import { Project as ProjectObj } from "../types/project";
import Colored from "./colored";

import '../assets/css/project.css';

type Props = {
    project: ProjectObj;
}

export default function Project({project}: Props) {
    const {t} = useTranslation();

    return <article className="Project">
        {/* @TODO load the image in the format that the web browser will handle */}
        <img src={`/assets/${project.image}.avif`} alt={t('projects.' + project.title + '.title')} />
        <div className="Project__Content">
            <h3><Colored color="YELLOW">{t('projects.' + project.title + '.title')}</Colored></h3>
            {project.description}
        </div>
        <div className="Project__Links">
            {
                project.links
                && project.links.length > 0
                && typeof project.links !== 'string'
                && project.links.map(x => <a href={x.url} key={x.name} target="_blank" rel="noopenner noreferrer">
                    <Colored color="GREEN">{t('projects.' + project.title + '.links.' + x.name)}</Colored>
                </a>)
            }
            {
                project.links
                && typeof project.links === 'string'
                && <p>{t(project.links)}</p>
            }
            {
                (!project.links || project.links.length === 0)
                && !project.placeholder
                && <p>{t('projects.not_available_publicly')}</p>
            }
        </div>
    </article>
}
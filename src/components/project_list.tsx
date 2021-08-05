import React from "react";
import { ReactNode } from "react";

import styles from '../assets/css/project_list.module.scss';

type Props = {
    title: string;
    description: string;
    children: ReactNode;
};

export default function ProjectList({title, description, children}: Props) {
    return <section className={styles.ProjectList}>
        <h1 className={styles.ProjectList__Title}>{title}</h1>
        {
            description && <p className={styles.ProjectList__Description}>{description}</p>
        }
        <ul className={styles.ProjectList__List}>
            {
                React.Children.map(children, (project, index) => <li key={index}>{project}</li>)
            }
        </ul>
    </section>;
}
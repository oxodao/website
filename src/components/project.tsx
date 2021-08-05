import { ReactNode } from "react";

import styles from '../assets/css/project.module.scss';
import Link from "./link";

type Props = {
    title: string;
    image: string;
    links?: Record<string, string>;
    children: ReactNode;
};

export default function Project({image, title, links, children}: Props) {
    return <article className={styles.Project}>
        <img className={styles.Project__Image} src={image} alt={title} />
        <div className={styles.Project__Description}>
            <h1>{title}</h1>
            {children}
        </div>
        <div className={styles.Project__Links}>
            {
                links && 
                Object.keys(links).map((key, index) => (
                    <Link key={index} text={key} to={links[key]} style={"Button"}/>
                ))
            }
            {
                !links &&
                <p>Non disponible au grand public</p>
            }
        </div>
    </article>
}
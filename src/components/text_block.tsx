import React from "react";
import { ReactNode } from "react";

import styles from '../assets/css/text_block.module.scss';

type Props = {
    title: string|ReactNode;
    children: ReactNode;
};

export default function TextBlock({title, children}: Props) {
    return <section className={styles.TextBlock}>
        {
            React.isValidElement(title) ? title : <h1 className={styles.TextBlock__Title}>{title}</h1>
        }
        {children}
    </section>
}
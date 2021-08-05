import styles from '../assets/css/link.module.scss';

export type LinkStyle = 'Standard' | 'Button';

type Props = {
    text?: string;
    to: string;
    style?: LinkStyle;
};

export default function Link({ text, to, style }: Props) {
    return <a
                rel="noreferrer"
                target="_blank"
                className={styles.Link + (style ? ' ' + styles['Link--' + style] : '')}
                href={to}>
        {text ?? to}
    </a>;
}
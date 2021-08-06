import styles from '../assets/css/link.module.scss';

export type LinkStyle = 'Standard' | 'Button' | 'Icon';

type BasicProps = {
    text?: string;
    to: string;
}

type Props = BasicProps & ({
    style?: 'Standard' | 'Button';
} | {
    style: 'Icon';
    icon: string;
});

export default function Link(props: Props) {
    return <>
        {
            props.style !== 'Icon' &&
            <a
                rel="noreferrer"
                target="_blank"
                className={styles.Link + (props.style ? ' ' + styles['Link--' + props.style] : '')}
                href={props.to}>
                {props.text ?? props.to}
            </a>
        }
        {
            props.style === 'Icon' &&
            <a
                rel="noreferrer"
                target="_blank"
                className={styles.Link + " " + styles['Link--WithIcon']}
                href={props.to}>
                <img src={props.icon} alt={props.text}/>
                {
                    props.text &&
                    <p>{props.text}</p>
                }
            </a>
        }

    </>;
}
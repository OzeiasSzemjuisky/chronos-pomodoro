import styles from '../components/Heading.module.css';

type HeadingProps = {
    children: string;
    
};


export function Heading ( {children}: HeadingProps) {
    return <h1 className={styles.heading}>{children}</h1>;
} 
import styles from './Container.module.css'

type ContainerProps = {
    Children: React.ReactNode;
};

export function Container({children}: ContainerProps) {
    return(
        <div className={styles.container}>
            <div className={styles.content}>{children}</div>
        </div>
    );
}
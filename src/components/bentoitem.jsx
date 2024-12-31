import styles from '../css/components/bento/bentoItem.module.css';

export function BentoItem({ children, columns, url = '#' }) {
    return (
        <article style={{
            gridColumn: "span "+columns
        }} className={styles.bentoItem}><a href={url} target='_blank' rel='noreferrer'>{children}</a></article>
    );
}

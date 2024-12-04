import styles from "./ServicesOptions.module.scss"


const Item = ({title, desc}) => {
    return (
        <div className={styles.item}>
            <h3 className={styles.item__title}>{title.en}</h3>
            <p className={styles.item__desc}>
                {desc.en}
            </p>
        </div>
    )
}

export default Item

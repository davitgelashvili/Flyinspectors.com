import styles from "./ServicesOptions.module.scss"


const Item = ({title, desc}) => {
    return (
        <div className={styles.item}>
            <div className={`${styles.item__head} d-flex align-center`}>
                <h3 className={styles.item__title}>{title}</h3>
            </div>
            <p className="item__desc">
                {desc}
            </p>
        </div>
    )
}

export default Item

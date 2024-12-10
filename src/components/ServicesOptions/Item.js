import { useSelector } from "react-redux"
import styles from "./ServicesOptions.module.scss"


const Item = ({title, desc}) => {
    const { language } = useSelector(state => state.translate)
    return (
        <div className={styles.item}>
            <h3 className={styles.item__title}>{title[language]}</h3>
            <p className={styles.item__desc}>
                {desc[language]}
            </p>
        </div>
    )
}

export default Item

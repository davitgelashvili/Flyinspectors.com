import { Link } from "react-router-dom"
import styles from './Menu.module.scss'

const Menu = () => {
    const data = [
        {
            link: '/',
            title: 'Home'
        },
        {
            link: '/submit-claim',
            title: 'Send Form'
        }
    ]
    return (
        <ul className={styles.nav}>
            {data?.map((item)=>{
                return (
                    <li className={styles.nav_item} key={item.title}>
                        <Link className={styles.pages} to={item.link}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu
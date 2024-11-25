import logo from "../Logo/LogoPic/LogoFly.png"
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <h1 className={styles.logo}>
            <img src={logo} alt="Logo" className={styles.logo__img} />
        </h1>
    )
}

export default Logo
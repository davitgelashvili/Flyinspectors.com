import logo from "../Logo/LogoPic/LogoFly.png"
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <h1>
        <img src={logo} alt="Logo" className={styles.logo} />
        </h1>
    )
}

export default Logo
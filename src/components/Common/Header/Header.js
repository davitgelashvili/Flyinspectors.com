import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import styles from './Header.module.scss'
import '../submitClaim/submitclaim.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navbar}>
                    <Logo />
                    <Menu />
                    <button className="submitClaim">Submit Claim ➜</button>
                </div>
            </div>
        </header>
    )
}

export default Header;

import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import styles from './Header.module.scss'
import SubmitLink from "../../UI/SubmitLink";

function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navbar}>
                    <Logo />
                    <Menu />
                    <SubmitLink />
                </div>
            </div>
        </header>
    )
}

export default Header;

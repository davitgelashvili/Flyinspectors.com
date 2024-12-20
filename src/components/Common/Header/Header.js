import Logo from "./Logo/Logo";
import styles from './Header.module.scss'
import SubmitLink from "../../UI/SubmitLink";
import BurgerMenu from "./Menu/BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import i18n from "../../../i18n/i18n";
import Language from "./Language/Language";
import iconMenu from "../../Images/iconMenu.png";

function Header() {
    const dispatch = useDispatch()
    let {language}  = useSelector(state => state.translate)
    const windowUrl = window.location.host
    const [languageBtn, setLanguageBtn] = useState(true);
    const [IsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        i18n.changeLanguage(language)
        if (windowUrl === 'flyinpectors.com' || windowUrl === 'flyinpectors.ge') {
            setLanguageBtn(true)
        }

        if (windowUrl === 'localhost:3000') {
            setLanguageBtn(true)
        }
    }, [dispatch, language])

    const toggleMenu = () => {
        setIsOpen(!IsOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__content}>
                    <Logo />
                    <BurgerMenu setIsOpen={setIsOpen} IsOpen={IsOpen} />
                    <div className={styles.header__right} >
                        <SubmitLink className={styles.header__submitlink} />
                        {
                            languageBtn && (
                                <Language language={language}/>
                            )
                        }
                        <div className={styles.header__burger} onClick={toggleMenu}>
                            <img src={iconMenu} alt="Menu" className={styles.iconMenu} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

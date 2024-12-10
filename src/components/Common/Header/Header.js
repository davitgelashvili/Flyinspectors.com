import Logo from "./Logo/Logo";
import styles from './Header.module.scss'
import SubmitLink from "../../UI/SubmitLink";
import BurgerMenu from "./Menu/BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { siteTranslateAction } from "../../../store/translate";
import { useEffect, useState } from "react";
import i18n from "../../../i18n/i18n";
import engFlag from "../../../assetss/images/brtsh.jpg"; 
import geoFlag from "../../../assetss/images/geo.jpg"; 

function Header() {
    const dispatch = useDispatch()
    const { language } = useSelector(state => state.translate)
    const windowUrl = window.location.host
    const [languageBtn, setLanguageBtn] = useState(true);

    useEffect(() => {
        i18n.changeLanguage(language)
        if (windowUrl === 'flyinpectors.com' || windowUrl === 'flyinpectors.ge') {
            setLanguageBtn(false)
        }
    }, [dispatch, language])

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__content}>
                    <Logo />
                    <BurgerMenu />
                    <div className={styles.sublng} >
                        <SubmitLink className={styles.submitlink} />
                        {
                            languageBtn && (
                                <div style={{ marginLeft: "15px" }} className={styles.language}>
                                    {language === "ka" ? (
                                        <img
                                            src={engFlag}
                                            alt="English"
                                            onClick={() => dispatch(siteTranslateAction.changeLanguage("en"))}
                                            style={{
                                                cursor: "pointer",
                                                width: "30px",
                                                height: "20px",
                                                border: "1px solid #ccc",
                                                borderRadius: "3px",
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={geoFlag}
                                            alt="Georgian"
                                            onClick={() => dispatch(siteTranslateAction.changeLanguage("ka"))}
                                            style={{
                                                cursor: "pointer",
                                                width: "30px",
                                                height: "20px",
                                                border: "1px solid #ccc",
                                                borderRadius: "3px",
                                            }}
                                        />
                                    )}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

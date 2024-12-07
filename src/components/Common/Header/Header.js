import Logo from "./Logo/Logo";
import styles from './Header.module.scss'
import SubmitLink from "../../UI/SubmitLink";
import BurgerMenu from "./Menu/BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { siteTranslateAction } from "../../../store/translate";
import { useEffect, useState } from "react";
import i18n from "../../../i18n/i18n";

function Header() {
    const dispatch = useDispatch()
    const {language} = useSelector( state => state.translate)
    const windowUrl = window.location.host
    const [languageBtn, setLanguageBtn] = useState(false);

    useEffect(()=>{
        i18n.changeLanguage(language)
        if(windowUrl === 'flyinpectors.com' || windowUrl === 'flyinpectors.ge'){
            setLanguageBtn(true)
        }
    }, [dispatch, language])

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__content}>
                    <Logo />
                    <BurgerMenu/>
                    <div className="d-flex align-items-center">
                        <SubmitLink className={styles.submitlink} />
                        {
                            languageBtn || !languageBtn && (
                                <div className="">
                                    {language === 'ka' ? (
                                        <button onClick={() => dispatch(siteTranslateAction.changeLanguage('en'))}>
                                            Eng
                                        </button>
                                    ) : (
                                        <button onClick={() => dispatch(siteTranslateAction.changeLanguage('ka'))}>
                                            Geo
                                        </button>
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

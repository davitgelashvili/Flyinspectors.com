import Logo from "./Logo/Logo";
import styles from './Header.module.scss'
import SubmitLink from "../../UI/SubmitLink";
import BurgerMenu from "./Menu/BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import i18n from "../../../i18n/i18n";
import Language from "./Language/Language";
import iconMenu from "../../Images/iconMenu.png";
import { siteTranslateAction } from "../../../store/translate";

function Header() {
    const dispatch = useDispatch()
    let {language}  = useSelector(state => state.translate)
    const windowUrl =  window.location.hostname
    const domain = windowUrl.replace(/^www\./, '');
    const [languageBtn, setLanguageBtn] = useState(true);
    const [IsOpen, setIsOpen] = useState(false);

    useEffect(()=> {
        console.log(windowUrl == 'flyinspectors.ge', windowUrl, 'flyinspectors.ge')
        if(windowUrl == 'flyinspectors.com'){
            dispatch(siteTranslateAction.changeLanguage('en'))
        }
        
        if(windowUrl == 'flyinspectors.ge'){
          dispatch(siteTranslateAction.changeLanguage('ka'))
        }
        
        if(windowUrl == 'flyinspectors.co.uk'){
            setLanguageBtn(false)
          dispatch(siteTranslateAction.changeLanguage('en'))
        }
    
        if(windowUrl == 'localhost'){
          dispatch(siteTranslateAction.changeLanguage('en'))
        }
    
        if(windowUrl == '127.0.0.1'){
            setLanguageBtn(false)
          dispatch(siteTranslateAction.changeLanguage('ka'))
        }

      }, [dispatch, windowUrl])

      useEffect(()=>{
        i18n.changeLanguage(language)
      }, [language])

    // useEffect(() => {
    //     i18n.changeLanguage(language)
    //     if (windowUrl === 'flyinpectors.com' || windowUrl === 'flyinpectors.ge') {
    //         setLanguageBtn(true)
    //     }

    //     if (windowUrl === 'localhost:3000') {
    //         setLanguageBtn(true)
    //     }
    // }, [dispatch, language])

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

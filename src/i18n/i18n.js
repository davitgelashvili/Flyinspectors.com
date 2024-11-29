import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import header from '../components/Common/Header/header.module'
import opensectionModule from "../components/OptionsSection/opensection.module";

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'ka',
        resources: {
            en: {
                translation: {
                    ...header.en,
                    ...opensectionModule.en
                }
            },
            ka: {
                translation: {
                    ...header.ka,
                    ...opensectionModule.ka
                }
            }
        }
    })

export default i18n
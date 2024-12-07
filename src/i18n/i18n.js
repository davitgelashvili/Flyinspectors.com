import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import header from '../components/Common/Header/header.module'
import opensectionModule from "../components/OptionsSection/opensection.module";
import CompensationInfoModule from "../Pages/FlightDelay/CompensationInfo/CompensationInfo.module";
import CompensationIfModule from "../Pages/FlightDelay/CompensationIf/CompensationIf.module";
import CompensationHowMuchModule from "../Pages/FlightDelay/CompensationHowMuch/CompensationHowMuch.module";

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    ...header.en,
                    ...opensectionModule.en,
                    ...CompensationInfoModule.en,
                    ...CompensationIfModule.en,
                    ...CompensationHowMuchModule.en
                }
            },
            ka: {
                translation: {
                    ...header.ka,
                    ...opensectionModule.ka,
                    ...CompensationInfoModule.ka,
                    ...CompensationIfModule.ka,
                    ...CompensationHowMuchModule.ka
                }
            }
        }
    })

export default i18n
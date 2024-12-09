import Item from "./Item"
import styles from './OurCoreValues.module.scss'
import { useTranslation } from "react-i18next";

const OurCoreValues = () => {
    const {t} = useTranslation()
    const data = [
        {
            title: t('OurCoreValues._1.title'),
            desc: t('OurCoreValues._1.desc'),
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733136703/ic_poll_24px_n6jrcg.png"
        },
        {
            title: t('OurCoreValues._2.title'),
            desc: t('OurCoreValues._2.desc'),
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733136704/ic_schedule_24px_semyyr.png"
        },
        {
            title: "Reliable Partner",
            desc: "Our company is a trustworthy and trusted ally in every situation",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733136705/ic_verified_user_24px_h326gi.png"
        },
        {
            title: "Professionalism",
            desc: "Our company is distinguished by qualified and professional lawyers with a high level of knowledge.",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733136701/ic_description_24px_hjqd5t.png"
        },
        {
            title: "No obligations",
            desc: "Our company works on a “no win, no fee” basis. So if we don’t win the case, we won’t charge you any fee for our services",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733136702/ic_local_atm_24px_r3kleu.png"
        },
        {
            title: "Simplicity",
            desc: "Getting compensation with us is very easy. You only need to fill the form and we handle all the other procedures.",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733136701/ic_description_24px_hjqd5t.png"
        },
        {
          title: "Partner companies",
          desc: "We cooperate with the world’s best law firms, this fact gives us the advantage over the airlines, which we use to get your compensation",
          icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1733136701/ic_gavel_24px_tlp2cv.png"
      },
    ]
    return (
        <div className={styles.OptionsSection}>
                <h3 className={styles.title}>{t('OurCoreValues.title')}</h3>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {data?.map((item)=>{
                        return (
                            <div className="col-lg-4" key={item.title}>
                                <Item title={item.title} desc={item.desc} icon={item.icon}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurCoreValues



  
import Item from "./Item"
import styles from './OurCoreValues.module.scss'

const OurCoreValues = () => {
    const data = [
        {
            title: "High effectiveness",
            desc: "If your flight delayed for 3+ hours you are eligible for compensation.",
            icon: "https://res.cloudinary.com/dkcr1v0dl/image/upload/v1731876432/ic_schedule_24px_cetutr.svg"
        },
        {
            title: "Accessibility",
            desc: "We offer you service in timely manner 7 days a week, 24 hours",
            icon: ""
        },
        {
            title: "Reliable Partner",
            desc: "Our company is a trustworthy and trusted ally in every situation",
            icon: ""
        },
        {
            title: "Professionalism",
            desc: "Our company is distinguished by qualified and professional lawyers with a high level of knowledge.",
            icon: ""
        },
        {
            title: "No obligations",
            desc: "Our company works on a “no win, no fee” basis. So if we don’t win the case, we won’t charge you any fee for our services",
            icon: ""
        },
        {
            title: "Simplicity",
            desc: "Getting compensation with us is very easy. You only need to fill the form and we handle all the other procedures.",
            icon: ""
        },
        {
          title: "Partner companies",
          desc: "We cooperate with the world’s best law firms, this fact gives us the advantage over the airlines, which we use to get your compensation",
          icon: ""
      },
    ]
    return (
        <div className={styles.OptionsSection}>
                <h3 className={styles.title}>DO YOU QUALIFY FOR A COMPENSATION</h3>
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



  
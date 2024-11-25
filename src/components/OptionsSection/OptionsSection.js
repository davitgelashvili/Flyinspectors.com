import Item from "./Item"
import styles from './OptionsSection.module.scss'

const OptionsSection = () => {
    const data = [
        {
            title: "Flight Delay Compensation",
            desc: "If your flight delayed for 3+ hours you are eligible for compensation.",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732476179/ic_schedule_24px_1_tanbbs.svg"
        },
        {
            title: "Flight Cancellation Compensation",
            desc: "Problem with flight cancellation without prior notice (or less then 14 days)? According to EU regulations, you are eligible for compensation.",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732476178/ic_event_24px_d9o56u.svg"
        },
        {
            title: "Missed Connection Compensation",
            desc: "Missed connecting flight because of flight delay? You are eligible for a compensation.",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732476178/ic_local_airport_24px_1_usunmk.svg"
        },
        {
            title: "Overbooking Compensation",
            desc: "Missed your flight because it was overbooked? You are eligible for a compensation.",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732476178/ic_group_24px_kortma.svg"
        },
        {
            title: "Denied Boarding Compensation",
            desc: "You were denied boarding a plane without any apparent reason or no reason at all? You are eligible for EU flight compensation.",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732476179/ic_not_interested_24px_cgrdlv.svg"
        },
        {
            title: "Delayed Baggage Compensation",
            desc: "Was your baggage delayed or arrived damaged? You are eligible for compensation.",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732476180/ic_work_24px_kobici.svg"
        },
    ]
    return (
        <div className={styles.OptionsSection}>
                <h3 className={styles.title}>DO YOU QUALIFY FOR A COMPENSATION</h3>
            <div className="container">
                <div className="row">
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

export default OptionsSection



  
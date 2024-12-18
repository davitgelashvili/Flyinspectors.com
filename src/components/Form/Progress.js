import { useState } from "react"
import styles from './Progress.module.scss'

const Progress = ({status}) => {
    const statusData = [
        'Application received',
        'Case proceedings initiated',
        'Rejected by the airline',
        'Transferred to the legal department',
        'Case appealed to a higher authority',
        'Case is pending in court',
        'Case successfully closed',
        'Case closed',
    ]
    const [step, setStep] = useState(status)
    
    return (
        <>
        <div className={` ${styles['steps']} `}>
            {statusData?.map((item, key)=>{
                return (
                    <>
                    <div className={` ${styles['steps__step']}  ${item === status && styles['steps__step--done']}`} key={item}>
                        <div className={` ${styles['steps__step-number']} `}>{key +1}</div>
                    </div>
                    </>
                )
            })}
        </div>
        <div className={` ${styles['steps']} `}>
            <div className={` ${styles['steps__step']} `}>
                <div className={`${styles['steps__step-name']} `}>{status}</div>
            </div>
        </div>
        </>
    )
}

export default Progress
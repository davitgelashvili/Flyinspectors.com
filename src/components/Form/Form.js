import { useEffect, useState } from "react"
import SendForm from "./SendForm"
import SearchForm from "./SearchForm"
import styles from './form.module.scss'

const Form = () => {
    const [formActive, setFormActive] = useState(true)

    return (
        <div className="container">
            <div  className={`${styles['form']}`}>
                <div className={`${styles['form__head']}`}>
                    <div className={`${styles['form__head--btn']} ${formActive && styles['active']}`} onClick={() => setFormActive(true)}>
                        Fill Form
                    </div>
                    <div className={`${styles['form__head--btn']} ${!formActive && styles['active']}`}  onClick={() => setFormActive(false)}>
                        Check The Status
                    </div>
                </div>
                <div className={`${styles['form__body']}`}>
                    {
                        formActive ? (
                            <SendForm/>
                        ) : (
                            <SearchForm />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Form
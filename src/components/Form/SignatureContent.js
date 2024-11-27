import styles from './Signature.module.scss'


const SignatureContent = ({title, desc}) => {
   

    return (
        <>
        <div className={styles.signature}>
            <div className={styles.signature__head}>
                <span className={styles['signature__head--title']}>{title}</span>
                <span className={styles['signature__head--desc']}>{desc}</span>
            </div>
            <div className={styles.signature__body}>
              
            </div>
            
            <button className={styles.signature__clear} >
                Clear
            </button>
        </div>
        </>
    )
}

export default SignatureContent
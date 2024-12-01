import ReactSignatureCanvas from 'react-signature-canvas'
import styles from './Signature.module.scss'
import { useEffect, useState } from 'react'


const SignatureContent = ({value, setValue}) => {
    const [signature, setSignature] = useState()
    const [data, setData] = useState('')

    useEffect(()=>{
        setValue({ ...value, "signature": data });
        console.log(value)
    }, [data])

    return (
        <>
        <div className={styles.signature}>
            <div className={styles.signature__head}>
                <span className={styles['signature__head--title']}>{'title'}</span>
                <span className={styles['signature__head--desc']}>{'desc'}</span>
            </div>
            <div className={styles.signature__body}>
            <ReactSignatureCanvas 
                ref={(ref)=> setSignature(ref)}
                onEnd={() => {
                    const res = signature.getTrimmedCanvas().toDataURL('image/png')
                    setData(res)
                }}
                penColor='blue'
                canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />,
            </div>
            <img src={value.signature} alt='res' />
            
        </div>
        </>
    )
}

export default SignatureContent
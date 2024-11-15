import { placeholder } from "@cloudinary/react"
import styles from './TextInput.module.scss'

const TextInput = ({type, value, placeholder, name, icon, onChange}) => {
    return (
        <label className={`${styles['textInput']}`}>
            <img src={icon} alt="icon" className={`${styles['textInput__icon']}`} />
            <input 
                className={`${styles['textInput__input']}`}
                type={type}
                value={value}
                placeholder={placeholder}
                name={name}
                onChange={(e) => onChange(e)}/>
        </label>
    )
}

export default TextInput



  
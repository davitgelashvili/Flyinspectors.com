import { placeholder } from "@cloudinary/react"
import styles from './TextInput.module.scss'

const TextInput = ({type, value, placeholder, name, icon, onChange}) => {
    return (
        <label className={`${styles['textinput']}`}>
            <img src={icon} alt="icon" className={`${styles['textinput__icon']}`} />
            <input 
                className={`${styles['textinput__input']}`}
                type={type}
                value={value}
                placeholder={placeholder}
                name={name}
                onChange={(e) => onChange(e)}/>
        </label>
    )
}

export default TextInput
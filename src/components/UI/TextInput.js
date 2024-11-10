import { placeholder } from "@cloudinary/react"

const TextInput = ({type, value, placeholder, name, onChange}) => {
    return (
        <label>
            <input 
                type={type}
                value={value}
                placeholder={placeholder}
                name={name}
                onChange={(e) => onChange(e)}/>
        </label>
    )
}

export default TextInput
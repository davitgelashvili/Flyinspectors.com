import { useEffect, useState } from "react"
import UploadWidget from "../UploadWidget/UploadWidget"
import TextInput from "../UI/TextInput"
import styles from './form.module.scss'


const Form = ({value, setValue, uploadFile}) => {
    const inputs = [
        {
            id: 32345,
            name: "firstName",
            type: "text",
            value: value.firstName,
            placeholder: "firstname",
            icon: "linl"
        },
        {
            id: 1574,
            name: "lastName",
            type: "text",
            value: value.lastName,
            placeholder: "lastName",
            icon: "linl"
        },
        {
            id: 46477,
            name: "phone",
            type: "text",
            value: value.phone,
            placeholder: "phone",
            icon: "linl"
        },
        {
            id: 5703,
            name: "email",
            type: "text",
            value: value.email,
            placeholder: "email",
            icon: "linl"
        },
        {
            id: 34643,
            name: "city",
            type: "text",
            value: value.city,
            placeholder: "city",
            icon: "linl"
        },
        {
            id: 753235,
            name: "address",
            type: "text",
            value: value.address,
            placeholder: "address",
            icon: "linl"
        },
        {
            id: 36273,
            name: "problem",
            type: "text",
            value: value.problem,
            placeholder: "problem",
            icon: "linl"
        },
        {
            id: 485845,
            name: "flightNumber",
            type: "text",
            value: value.flightNumber,
            placeholder: "flightNumber",
            icon: "linl"
        },
        {
            id: 457853,
            name: "date",
            type: "text",
            value: value.date,
            placeholder: "date",
            icon: "linl"
        },
        ,
        {
            id: 2542645,
            name: "description",
            type: "text",
            value: value.description,
            placeholder: "description",
            icon: "linl"
        },
    ]

    const handleChange = (e) =>{
        setValue({...value,[e.target.name]: e.target.value})
    }

    return (
        <div>
            <div className="headerForm">
            <h3>Fill Form</h3>
            <h3> Check the Status</h3>
            </div>
            <div>
        <form className={styles.formContainer}>
            {inputs.map((input)=>{
                return (
                    <TextInput 
                        className={styles.inputStyle}
                        key={input.id}
                        type={input.type}
                        value={input.value}
                        placeholder={input.placeholder}
                        name={input.name}
                        icon={input.icon}
                        onChange={handleChange}
                        />
                )
            })}
        </form>   
    </div>
    <UploadWidget value={value} valueName={"passportImage"} setValue={setValue}/>
        <UploadWidget value={value} valueName={"ticketImage"} setValue={setValue}/>
        <button onClick={(e) => uploadFile(e)}>Submit Form</button>
        {value.passportImage && <img src={value.passportImage} alt="" />}
        </div>
        
    )
}

export default Form
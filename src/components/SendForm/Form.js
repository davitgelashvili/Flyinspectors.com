import { useEffect, useState } from "react"
import UploadWidget from "../UploadWidget/UploadWidget"
import TextInput from "../UI/TextInput"

const Form = ({value, setValue, uploadFile}) => {
    const inputs = [
        {
            id: 32345,
            name: "firstName",
            type: "text",
            value: value.firstName,
            placeholder: "firstname",
        },
        {
            id: 1574,
            name: "lastName",
            type: "text",
            value: value.lastName,
            placeholder: "lastName",
        },
        {
            id: 46477,
            name: "phone",
            type: "text",
            value: value.phone,
            placeholder: "phone",
        },
        {
            id: 5703,
            name: "email",
            type: "text",
            value: value.email,
            placeholder: "email",
        },
        {
            id: 34643,
            name: "city",
            type: "text",
            value: value.city,
            placeholder: "city",
        },
        {
            id: 753235,
            name: "address",
            type: "text",
            value: value.address,
            placeholder: "address",
        },
        {
            id: 36273,
            name: "problem",
            type: "text",
            value: value.problem,
            placeholder: "problem",
        },
        {
            id: 485845,
            name: "fightNumber",
            type: "text",
            value: value.fightNumber,
            placeholder: "fightNumber",
        },
        {
            id: 457853,
            name: "date",
            type: "text",
            value: value.date,
            placeholder: "date",
        },
        ,
        {
            id: 2542645,
            name: "description",
            type: "text",
            value: value.description,
            placeholder: "description",
        },
    ]

    const handleChange = (e) =>{
        setValue({...value,[e.target.name]: e.target.value})
    }

    return (
        <div>
            <form>
                {inputs.map((input)=>{
                    return (
                        <TextInput 
                            key={input.id}
                            type={input.type}
                            value={input.value}
                            placeholder={input.placeholder}
                            name={input.name}
                            onChange={handleChange}
                            />
                    )
                })}
            </form>
            <UploadWidget value={value} valueName={"pasportImage"} setValue={setValue}/>
            <UploadWidget value={value} valueName={"ticketImage"} setValue={setValue}/>
            <button onClick={(e) => uploadFile(e)}>send</button>
            {value.pasportImage && <img src={value.pasportImage} alt="" />}
        </div>
    )
}

export default Form
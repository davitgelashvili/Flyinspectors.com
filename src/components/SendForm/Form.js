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
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600392/Form%20icons/ijhlmpfbajgs0ypeymoy.svg"
        },
        {
            id: 1574,
            name: "lastName",
            type: "text",
            value: value.lastName,
            placeholder: "lastName",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600392/Form%20icons/ijhlmpfbajgs0ypeymoy.svg"
        },
        {
            id: 46477,
            name: "phone",
            type: "text",
            value: value.phone,
            placeholder: "phone",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600390/Form%20icons/ifezno0nleyy8tyuclzg.svg"
        },
        {
            id: 5703,
            name: "email",
            type: "text",
            value: value.email,
            placeholder: "email",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600391/Form%20icons/nslmitrcambiai6wmfen.svg"
        },
        {
            id: 34643,
            name: "city",
            type: "text",
            value: value.city,
            placeholder: "city",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600391/Form%20icons/kuhub9sf2shcfwtecvy9.svg"
        },
        {
            id: 753235,
            name: "address",
            type: "text",
            value: value.address,
            placeholder: "address",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600391/Form%20icons/chfs24yjcgkltrezdbzn.svg"
        },
        {
            id: 36273,
            name: "problem",
            type: "text",
            value: value.problem,
            placeholder: "problem",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600393/Form%20icons/sfew5nqowhazn00o76ho.svg"
        },
        {
            id: 485845,
            name: "flightNumber",
            type: "text",
            value: value.fightNumber,
            placeholder: "fightNumber",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600391/Form%20icons/mn0qzrqet0padkpm6rgj.svg"
        },
        {
            id: 457853,
            name: "date",
            type: "text",
            value: value.date,
            placeholder: "date",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600391/Form%20icons/ivmgutc8eckheli6at9q.svg"
        },
        {
            id: 2542645,
            name: "description",
            type: "text",
            value: value.description,
            placeholder: "description",
            icon: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600393/Form%20icons/nzxyqpypgliouotsa6ie.svg"
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
                            icon={input.icon}
                            onChange={handleChange}
                            />
                    )
                })}
            </form>
            <UploadWidget value={value} valueName={"passportImage"} setValue={setValue}/>
            <UploadWidget value={value} valueName={"ticketImage"} setValue={setValue}/>
            <button onClick={(e) => uploadFile(e)}>Submit Form</button>
            {value.passportImage && <img src={value.passportImage} alt="" />}
        </div>
    )
}

export default Form
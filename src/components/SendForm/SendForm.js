import { useEffect, useState } from "react"
import UploadWidget from "../UploadWidget/UploadWidget"
import Form from "./Form"

const SendForm = () => {
    const [value, setValue] = useState({
        pasportImage: "",
        ticketImage: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        city: "",
        address: "",
        problem: "",
        fightNumber: "",
        date: "",
        description: "",
    })

    useEffect(()=>{
        console.log('change value:', value)
    }, [value])

    const uploadFile = (e) => {
        e.preventDefault()
        fetch('https://flyinspectors-back.vercel.app/email', {
            method: "POST",
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                ...value
            })
        })
        .then((res) => res.json())
        .then(res => {
            console.log("send email:", res);
        })

        fetch('https://flyinspectors-back.vercel.app/client', {
            method: "POST",
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                ...value
            })
        })
        .then((res) => res.json())
        .then(res => {
            console.log("save data:", res);
        })

    }

    return (
        <Form value={value} setValue={setValue} uploadFile={uploadFile}/>
    )
}

export default SendForm
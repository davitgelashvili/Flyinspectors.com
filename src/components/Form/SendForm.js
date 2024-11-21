import { useEffect, useState } from "react"
import SendFormBody from "./SendFormBody"

const SendForm = () => {
    const [accept, setAccept] = useState(false)
    const [value, setValue] = useState({
        passportImage: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732114543/fnded4xmbkvadnqxxygk.jpg",
        ticketImage: "https://res.cloudinary.com/dluqxr8lw/image/upload/v1732114543/fnded4xmbkvadnqxxygk.jpg",
        firstName: "test",
        lastName: "test",
        phone: "test",
        email: "test",
        city: "test",
        address: "test",
        problem: "test",
        flightNumber: "test",
        date: "test",
        select: "test",
        description: "test",
    })

    useEffect(()=>{
        console.log(value)
        if(
            value.firstName !== "" &&
            value.lastName !== "" &&
            value.phone !== "" &&
            value.email !== "" &&
            value.city !== "" &&
            value.address !== "" &&
            value.problem !== "" &&
            value.fightNumber !== "" &&
            value.date !== "" &&
            value.select !== "" &&
            value.description !== "" 
        ){
            setAccept(true)
        } else {
            setAccept(false)
        }
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
        <SendFormBody value={value} setValue={setValue} uploadFile={uploadFile} setAccept={setAccept} accept={accept}/>
    )
}

export default SendForm
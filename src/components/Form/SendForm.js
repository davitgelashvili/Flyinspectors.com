import { useEffect, useState } from "react"
import SendFormBody from "./SendFormBody"

const SendForm = () => {
    const [accept, setAccept] = useState(false)
    const [value, setValue] = useState({
        passportImage: "",
        ticketImage: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        city: "",
        address: "",
        problem: "",
        flightNumber: "",
        date: "",
        select: "",
        description: "",
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
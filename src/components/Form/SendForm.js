import { useEffect, useState } from "react"
import SendFormBody from "./SendFormBody"

const SendForm = () => {
    const unicueID = 
        Math.floor((Math.random() * 10) + 1) +''+
        Math.floor((Math.random() * 10) + 1) +''+
        Math.floor((Math.random() * 10) + 1) +''+
        Math.floor((Math.random() * 10) + 1) +''+
        Math.floor((Math.random() * 10) + 1)
    const [accept, setAccept] = useState({
        passport: false,
        ticket: false,
        other: false
    })
    const [value, setValue] = useState({
        passportImage: "",
        ticketImage: "",
        otherImage: "",
        userId: unicueID,
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
        description: "",
    })

    useEffect(()=>{
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
            setAccept({
                passport: true,
                ticket: false,
                other: false
            })
            if(value.passportImage !== ""){
                setAccept({
                    passport: true,
                    ticket: true,
                    other: false
                })
            }
            
            if(value.ticketImage !== ""){
                setAccept({
                    passport: true,
                    ticket: true,
                    other: true
                })
            }
        } else {
            setAccept({
                passport: false,
                ticket: false,
                other: false
            })
        }
        console.log(value)
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
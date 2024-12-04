import { useEffect, useState } from "react"
import SendFormBody from "./SendFormBody"
import PopUp from "./PopUp"

const SendForm = () => {
    const [load, setLoad] = useState(false)
    const [popup, setPopup] = useState(false)
    const [unicueID, setUnicueID] = useState(
        Math.floor((Math.random() * 10) + 1) +''+
        Math.floor((Math.random() * 10) + 1) +''+
        Math.floor((Math.random() * 10) + 1) +''+
        Math.floor((Math.random() * 10) + 1) +''+
        Math.floor((Math.random() * 10) + 1)
    )
    const [accept, setAccept] = useState({
        passport: false,
        ticket: false,
        other: false
    })
    const [value, setValue] = useState({
        passportImage: "",
        ticketImage: "",
        otherImage: "",
        signature: "",
        userId: unicueID,
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
        setPopup(true)
        setLoad(true)
        fetch(`${process.env.REACT_APP_API_URL}/email`, {
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
        .finally(()=>{
            console.log('hereee')
            fetch(`${process.env.REACT_APP_API_URL}/client`, {
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
            }).finally(()=>{
                setLoad(false)
            })
        })


    }
    return (
        <>
        <SendFormBody value={value} setValue={setValue} uploadFile={uploadFile} setAccept={setAccept} accept={accept} load={load} setLoad={setLoad}/>
        { popup && <PopUp load={load} setPopup={setPopup} unicueID={unicueID}/> }
        </>
    )
}

export default SendForm
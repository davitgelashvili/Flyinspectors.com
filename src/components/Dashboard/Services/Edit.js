import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const ServicesEdit = () => {
    const [data, setData] = useState([])
    const {id} = useParams()
    const [update, setUpdate] = useState(true)
    const [value, setValue] = useState('')

    useEffect(()=>{
        fetch('https://flyinspectors-back.vercel.app/client', {
            method: "GET",
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
        })
        .then((res) => res.json())
        .then(res => {
            console.log(res)
            const x = res.filter(item => item.userId == id)
            setData(...x)
        })
    }, [update])

    function handlClick (e) {
        e.preventDefault()
        fetch('https://flyinspectors-back.vercel.app/client/id', {
            method: "PUT",
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                userId: id,
                status: value
            })
        })
        .then((res) => res.json()).finally(()=>{
            setUpdate(!update)

        })
    }

    return (
        <div className="container">
            <div className="col-lg-6">
                <div>
                    hi
                </div>
            </div>
        </div>
    )
}

export default ServicesEdit
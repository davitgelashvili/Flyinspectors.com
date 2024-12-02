import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import TextInput from "../../UI/TextInput";

const ServicesEdit = () => {
    const [data, setData] = useState([])
    const {id} = useParams()
    const [update, setUpdate] = useState(true)
    const [valueTitle, setValueTitle] = useState('')
    const [valueDesc, setValueDesc] = useState('')

    useEffect(()=>{
        fetch('https://flyinspectors-back.vercel.app/services', {
            method: "GET",
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
        })
        .then((res) => res.json())
        .then(res => {
            const x = res.filter(item => item.id == id)
            setData(...x)
        })
    }, [update])

    function handlClick (e) {
        e.preventDefault()
        fetch('https://flyinspectors-back.vercel.app/services/id', {
            method: "PUT",
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                id: id,
                title: valueTitle,
                description: valueDesc
            })
        })
        .then((res) => res.json()).finally(()=>{
            setUpdate(!update)
        })
    }

    console.log(data)

    return (
        <div className="container">
            <div className="col-lg-6">
                <div>
                    <div>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                    </div>
                    <TextInput
                        type={"text"}
                        value={valueTitle}
                        placeholder={'Enter title'}
                        name={"title"}
                        icon={''}
                        onChange={e => setValueTitle(e.target.value)}
                        />

                    <TextInput
                        type={"text"}
                        value={valueDesc}
                        placeholder={'Enter desc'}
                        name={"desc"}
                        icon={''}
                        onChange={e => setValueDesc(e.target.value)}
                        />
                    <button onClick={handlClick}>
                        save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ServicesEdit
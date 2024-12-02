import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import TextInput from "../../UI/TextInput";
import Loading from "../../Loading/Loading";

const RateEdit = () => {
    const [data, setData] = useState([])
    const {id} = useParams()
    const [update, setUpdate] = useState(true)
    const [valueTitle, setValueTitle] = useState('')
    const [valueDesc, setValueDesc] = useState('')
    const [load, setLoad] = useState(false)

    useEffect(()=>{
        setValueTitle(data.title)
        setValueDesc(data?.description)
    }, [data])

    useEffect(()=>{
        fetch('https://flyinspectors-back.vercel.app/rate', {
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
        setLoad(true)
        fetch('https://flyinspectors-back.vercel.app/rate/id', {
            method: "PUT",
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                id: id,
                title: valueTitle,
                description: valueDesc,
                icon: data.icon
            })
        })
        .then((res) => res.json()).finally(()=>{
            setLoad(false)
            setUpdate(!update)
        })
    }

    return (
        <div className="container">
            <div className="col-lg-6">
                <div>
                    <div>
                        <p>{data.icon}</p>
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
                        type={"textarea"}
                        value={valueDesc}
                        placeholder={'Enter desc'}
                        name={"desc"}
                        icon={''}
                        onChange={e => setValueDesc(e.target.value)}
                        />
                    {load && <Loading />}
                    <button onClick={handlClick}>
                        save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RateEdit
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
        setValueTitle({
            en: data?.title?.en,
            ka: data?.title?.ka
        })
        setValueDesc({
            en: data?.description?.en,
            ka: data?.description?.ka
        })
    }, [data])

    useEffect(()=>{
        fetch('https://api.fly.gelashvili.me/rate', {
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
        fetch('https://api.fly.gelashvili.me/rate/id', {
            method: "PUT",
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                id: id,
                title: {
                    en: valueTitle.en,
                    ka: valueTitle.ka
                },
                description: {
                    en: valueDesc.en,
                    ka: valueDesc.ka
                },
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
            <div className="row">
                <div className="col-6">
                    <div>
                        <p>eng</p>
                        <TextInput
                            type={"text"}
                            value={valueTitle.en}
                            placeholder={'Enter title'}
                            name={"title"}
                            icon={''}
                            onChange={e => setValueTitle({
                                ...valueTitle,
                                en: e.target.value
                            })}
                            />

                        <TextInput
                            type={"textarea"}
                            value={valueDesc.en}
                            placeholder={'Enter desc'}
                            name={"desc"}
                            icon={''}
                            onChange={e => setValueDesc({
                                ...valueDesc,
                                en: e.target.value,
                            })}
                            />
                    </div>
                </div>
                <div className="col-6">
                    <div>
                            <p>ge</p>
                    <TextInput
                            type={"text"}
                            value={valueTitle.ka}
                            placeholder={'Enter title'}
                            name={"title"}
                            icon={''}
                            onChange={e => setValueTitle({
                                ...valueTitle,
                                ka: e.target.value
                            })}
                            />

                        <TextInput
                            type={"textarea"}
                            value={valueDesc.ka}
                            placeholder={'Enter desc'}
                            name={"desc"}
                            icon={''}
                            onChange={e => setValueDesc({
                                ...valueDesc,
                                ka: e.target.value,
                            })}
                            />
                    </div>
                </div>
                <div>
                    <div>
                    {load && <Loading />}
                    </div>
                    <button onClick={handlClick}>
                        save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RateEdit
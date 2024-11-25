import { useEffect, useState } from "react"
import TextInput from "../UI/TextInput"

const SearchForm = () => {
    const [id, setId] = useState("")
    const [data, setData] = useState()
    function handleChange(e){
        e.preventDefault()
        fetch('http://localhost:8000/id', {
            method: "POST",
            headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                userId: id
            })
        })
        .then((res) => res.json())
        .then(res => {
            setData(...res)
            console.log("save data:", res);
        })
    }

    useEffect(()=>{
        console.log(data)
    }, [data])

    return (
        <div className="search">
            <TextInput
                  type={"text"}
                  value={id}
                  placeholder={'ID'}
                  name={"id"}
                  icon={''}
                  onChange={e => setId(e.target.value)}
                />
            <div className="search__status">
                {data?.status}
            </div>
            <button className="search__btn" onClick={handleChange}>search</button>
        </div>
    )
}

export default SearchForm
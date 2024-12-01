import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesList = () => {
    const [data, setData] = useState([])

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
            setData(res)
            console.log("save data:", res);
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                {data?.map((item)=>{
                    return (
                        <div className="col-6" key={item._id}>
                            <Link to={item._id}>
                                <h2>{item.title} {item.lastName}</h2>
                                <h2><strong>desc:</strong>{item.description}</h2>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ServicesList
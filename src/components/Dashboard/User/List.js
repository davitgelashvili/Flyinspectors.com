import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
    const [data, setData] = useState([])

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
                            <Link to={item.userId}>
                                <h2>{item.firstName} {item.lastName}</h2>
                                <h2><strong>status:</strong>{item.status}</h2>
                                <h2><strong>user ID:</strong>{item.userId}</h2>
                                <p><strong>emaill:</strong>{item.email}</p>
                                <p><strong>phone:</strong>{item.phone}</p>
                                <p><strong>address:</strong>{item.date}</p>
                                <p><strong>date:</strong>{item.date}</p>
                                <p><strong>city:</strong>{item.city}</p>
                                <p><strong>flightNumber:</strong>{item.flightNumber}</p>
                                <p><strong>problem:</strong>{item.problem}</p>
                                <p><strong>description:</strong>{item.description}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserList
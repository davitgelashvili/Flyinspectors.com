import { useEffect, useState } from "react"
import Login from "./Login"
import Edit from "./Edit"

const Dashboard = () => {
    const [login, setLogin] = useState(false)
    useEffect((()=>{}),[login])
    return (
        <div className="container">
            {login ? (
                <Edit />
            ) : (
                <Login setLogin={setLogin}/>
            )}
        </div>
    )
}

export default Dashboard
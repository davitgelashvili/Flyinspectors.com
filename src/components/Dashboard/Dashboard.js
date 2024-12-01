import { useEffect, useState } from "react"
import Login from "./Login"
import UserList from "./User/List"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Dashboard = () => {
    const user = useSelector( state => state.userData)
    console.log(user)
    return (
        <div className="container">
            {user.logedIn ? (
                <ul>
                    <Link to={'userlist'}>
                        user list
                    </Link>
                    <Link to={'services'}>
                        services list
                    </Link>
                </ul>
            ) : (
                <Login />
            )}
        </div>
    )
}

export default Dashboard
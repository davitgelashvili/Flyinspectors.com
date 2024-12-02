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
                    <li>
                        <Link to={'userlist'}>
                            user list
                        </Link>
                    </li>
                    <li>
                        <Link to={'services'}>
                            services list
                        </Link>
                    </li>
                    <li>
                        <Link to={'rate'}>
                            rate list
                        </Link>
                    </li>
                </ul>
            ) : (
                <Login />
            )}
        </div>
    )
}

export default Dashboard
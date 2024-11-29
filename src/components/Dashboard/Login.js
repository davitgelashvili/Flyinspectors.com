import { useState } from "react"
import TextInput from "../UI/TextInput"
import { useDispatch } from "react-redux"
import { userAction } from "../../store/userData"

const Login = () => {
    const [user, setUser] = useState("info@flyinspectors.com")
    const [pass, setPass] = useState("Flyinspectors2017.")
    const dispatch = useDispatch()
    return (
        <div>
            <TextInput
                type={'text'}
                value={user}
                placeholder={"email"}
                name={"user"}
                icon={'https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600392/Form%20icons/ijhlmpfbajgs0ypeymoy.svg'}
                onChange={(e) => setUser(e.target.value)}
                />
            <TextInput
                type={'password'}
                value={pass}
                placeholder={"password"}
                name={"pass"}
                icon={'https://res.cloudinary.com/dluqxr8lw/image/upload/v1731600392/Form%20icons/ijhlmpfbajgs0ypeymoy.svg'}
                onChange={(e) => setPass(e.target.value)}
                />
            <button onClick={() => {
                if(process.env.REACT_APP_adminUser == user && process.env.REACT_APP_adminPass == pass){
                    dispatch(userAction.changeLogedIn(true))
                }
            }}>
                Login
            </button>
        </div>
    )
}

export default Login
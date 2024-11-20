import { useState } from "react"
import TextInput from "../UI/TextInput"

const Login = ({setLogin}) => {
    const [user, setUser] = useState("info@flyinspectors.com")
    const [pass, setPass] = useState("Flyinspectors2017.")
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
                    setLogin(true)
                }
            }}>
                Login
            </button>
        </div>
    )
}

export default Login
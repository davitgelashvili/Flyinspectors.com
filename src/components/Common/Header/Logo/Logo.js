import logo from "../Logo/LogoPic/LogoFly.png"
import './logo.css'

const Logo = () => {
    return (
        <h1>
        <img src={logo} alt="Logo" className="logo" />
        </h1>
    )
}

export default Logo
import { Link } from "react-router-dom"
import './menu.css'

const Menu = () => {
    const data = [
        {
            link: '/',
            title: 'Home'
        },
        {
            link: '/submit-claim',
            title: 'Send Form'
        }
    ]
    return (
        <ul className="nav">
            {data?.map((item)=>{
                return (
                    <li className="nav-item" key={item.title}>
                        <Link className="pages" to={item.link}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu
import { Link } from "react-router-dom"

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
        <ul>
            {data?.map((item)=>{
                return (
                    <li key={item.title}>
                        <Link to={item.link}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu
const Item = ({title, desc, icon}) => {
    return (
        <div className="item">
            <div className="item__head d-flex align-items-center">
                <img src={icon} alt="icon" />
                <h3>{title}</h3>
            </div>
            <p className="item__desc">
                {desc}
            </p>
        </div>
    )
}

export default Item



  
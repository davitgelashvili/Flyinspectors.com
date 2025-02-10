import { Link } from "react-router-dom"
import Loading from "../../Loading/Loading"

const Item = ({item, handleDelete, load}) => {
    return (
        <div className="col-lg-4">
            <div
                style={{
                    marginBottom: '20px',
                    width: '100%',
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "20px",
                    backgroundColor: "#f9f9f9",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <p
                    style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "12px",
                        color: "#555",
                    }}
                >
                    {/* #{displayData.length - index} */}
                </p>
                <Link
                    to={item.userId}
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginBottom: "8px",
                        }}
                    >
                        {item.firstName} {item.lastName}
                    </h2>
                    <h2
                        style={{
                            fontSize: "16px",
                            color: "blue",
                            marginBottom: "8px",
                        }}
                    >
                        <p>Old Status: {item.oldStatus}</p>
                        <strong>Status:</strong> {item.status}
                    </h2>
                    <h2
                        style={{
                            fontSize: "16px",
                            color: "green",
                            marginBottom: "8px",
                        }}
                    >
                        <strong>User ID:</strong> {item.userId}
                    </h2>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "#333",
                            marginBottom: "4px",
                        }}
                    >
                        <strong>Email:</strong> {item.email}
                    </p>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "#333",
                            marginBottom: "4px",
                        }}
                    >
                        <strong>Phone:</strong> {item.phone}
                    </p>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "#333",
                            marginBottom: "4px",
                        }}
                    >
                        <strong>Address:</strong> {item.address}
                    </p>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "#333",
                            marginBottom: "4px",
                        }}
                    >
                        <strong>Date:</strong> {item.date}
                    </p>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "#333",
                            marginBottom: "4px",
                        }}
                    >
                        <strong>City:</strong> {item.city}
                    </p>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "#333",
                            marginBottom: "4px",
                        }}
                    >
                        <strong>Flight Number:</strong> {item.flightNumber}
                    </p>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "red",
                            marginBottom: "4px",
                        }}
                    >
                        <strong>Problem:</strong> {item.problem}
                    </p>
                </Link>
                {load && <Loading />}
                <button
                    onClick={() => handleDelete(item)}
                    style={{
                        marginTop: "10px",
                        padding: "8px 16px",
                        backgroundColor: "#ff4d4f",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Item
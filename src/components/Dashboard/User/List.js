import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/client`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                console.log("save data:", res);
            });
    }, []);

    return (
        <div className="container">
            <div
                className="user-list"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                    gap: "20px", // Spacing between columns and rows
                    marginTop: "20px"
                }}
            >
                {data?.map((item) => (
                    <div
                        key={item._id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "20px",
                            backgroundColor: "#f9f9f9",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <Link
                            to={item.userId}
                            style={{
                                textDecoration: "none",
                                color: "inherit"
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    marginBottom: "8px"
                                }}
                            >
                                {item.firstName} {item.lastName}
                            </h2>
                            <h2
                                style={{
                                    fontSize: "16px",
                                    color: "blue",
                                    marginBottom: "8px"
                                }}
                            >
                                <strong>Status:</strong> {item.status}
                            </h2>
                            <h2
                                style={{
                                    fontSize: "16px",
                                    color: "green",
                                    marginBottom: "8px"
                                }}
                            >
                                <strong>User ID:</strong> {item.userId}
                            </h2>
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "#333",
                                    marginBottom: "4px"
                                }}
                            >
                                <strong>Email:</strong> {item.email}
                            </p>
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "#333",
                                    marginBottom: "4px"
                                }}
                            >
                                <strong>Phone:</strong> {item.phone}
                            </p>
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "#333",
                                    marginBottom: "4px"
                                }}
                            >
                                <strong>Address:</strong> {item.address}
                            </p>
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "#333",
                                    marginBottom: "4px"
                                }}
                            >
                                <strong>Date:</strong> {item.date}
                            </p>
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "#333",
                                    marginBottom: "4px"
                                }}
                            >
                                <strong>City:</strong> {item.city}
                            </p>
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "#333",
                                    marginBottom: "4px"
                                }}
                            >
                                <strong>Flight Number:</strong> {item.flightNumber}
                            </p>
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "red",
                                    marginBottom: "4px"
                                }}
                            >
                                <strong>Problem:</strong> {item.problem}
                            </p>
                            {/* Uncomment if needed */}
                            {/* <p>
                                <strong>Description:</strong> {item.description}
                            </p> */}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
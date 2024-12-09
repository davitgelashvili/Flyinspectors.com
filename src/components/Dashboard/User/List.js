import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../UI/TextInput";

const UserList = () => {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");

    // Fetch user data
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/client`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    }, []);

    // Search filter
    function handleSearch(e) {
        const query = e.target.value.toLowerCase();
        setSearch(query);

        const results = data.filter(
            (item) =>
                item.userId.toString().includes(query) ||
                item.email?.toLowerCase().includes(query)
        );
        setFiltered(results);
    }

    // Delete user
    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}/client/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => {
                if (res.ok) {
                    // Remove the user from the local state
                    setData((prevData) => prevData.filter((item) => item._id !== id));
                    setFiltered((prevFiltered) =>
                        prevFiltered.filter((item) => item._id !== id)
                    );
                } else {
                    console.error("Failed to delete user");
                }
            })
            .catch((err) => console.error(err));
    };

    const displayData = search ? filtered : data;

    return (
        <div className="container" style={{ marginBottom: "20px" }}>
            <div className="row">
                <div className="col-7">
                    <div
                        style={{ width: "50%", marginTop: "50px" }}
                        className="d-flex align-items-center"
                    >
                        <TextInput
                            type={"text"}
                            value={search}
                            placeholder={"Enter User ID or Email"}
                            name={"search"}
                            icon={""}
                            onChange={(e) => {
                                handleSearch(e);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div
                className="user-list"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "20px",
                    marginTop: "20px",
                }}
            >
                {displayData?.map((item) => (
                    <div
                        key={item._id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "20px",
                            backgroundColor: "#f9f9f9",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    >
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
                        <button
                            onClick={() => handleDelete(item._id)}
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
                ))}
            </div>
        </div>
    );
};

export default UserList;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../UI/TextInput";
import Loading from "../../Loading/Loading";

const UserList = () => {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [res, setRes] = useState(true)
    const [load, setLoad] = useState(true)
    const [page, setPage] = useState(1)
    // const [totalPage, setTotalPage] = useState(0)

    // Fetch user data
    // ?page=${page}&limit=50
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
            }).finally(() => {
                setLoad(false)
            });
    }, [res, page]);

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
    const handleDelete = (user) => {
        setLoad(true)
        fetch(`${process.env.REACT_APP_API_URL}/delete`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                userId: user.userId,
            }),
        })
            .then((res) => res.json())
            .finally(() => {
                setRes(!res);
                setLoad(false)
            });
    };

    const displayData = search ? filtered : data;

    // console.log(displayData)

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
                {load && <Loading />}
                {displayData?.reverse().map((item, index) => (
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
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                marginBottom: "12px",
                                color: "#555",
                            }}
                        >
                            #{displayData.length - index}
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
                ))}
            </div>
            {/* <div>
                {page > 1 && <button onClick={()=>setPage(page - 1)}>back</button>}
                {page && <button onClick={()=>setPage(page + 1)}>next</button>}
                <p>page now: {page}</p>
                <p>total page: {data?.pagination?.totalPages}</p>
                
            </div> */}
        </div>
    );
};

export default UserList;
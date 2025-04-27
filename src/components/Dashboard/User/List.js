import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../UI/TextInput";
import Loading from "../../Loading/Loading";
import Item from "./Item";
import { downloadExcel } from "react-export-table-to-excel";

const UserList = () => {
    const getFormattedDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const fullDate = getFormattedDate();

    const [excelBody, setExcelBody] = useState([]);
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [resetData, setResetData] = useState(true);
    const [load, setLoad] = useState(true);
    const [startDate, setStartDate] = useState(fullDate);
    const [endDate, setEndDate] = useState(fullDate);
    const [page, setPage] = useState(1);
    const [limit] = useState(3);
    const [totalPages, setTotalPages] = useState(1);
    const [reverse] = useState(true);

    const excelHeader = [
        '_id', 'passportImage', 'ticketImage', 'otherImage', 'signature',
        'userId', 'firstName', 'lastName', 'phone', 'email', 'city', 'address',
        'problem', 'flightNumber', 'date', 'select', 'description', 'status',
        'oldStatus', 'createDate', '__v'
    ];

    const queryParams = new URLSearchParams({
        page,
        limit,
        reverse
    }).toString();

    useEffect(() => {
        setLoad(true);
        setData([]);
        setSearchText("");
        setStartDate(fullDate);
        setEndDate(fullDate);

        fetch(`${process.env.REACT_APP_API_URL}/client?${queryParams}`)
            .then(res => res.json())
            .then(res => {
                setData(res.data || []);
                setTotalPages(res.pagination?.totalPages || 1);
            })
            .catch(console.error)
            .finally(() => setLoad(false));
    }, [page, resetData]);

    useEffect(() => {
        setExcelBody(data);
    }, [data]);

    const handleDownloadExcel = () => {
        downloadExcel({
            fileName: Date.now().toString(),
            sheet: "client",
            tablePayload: {
                header: excelHeader,
                body: excelBody
            },
        });
    };

    const clickSearchText = () => {
        if (!searchText.trim()) return;
        setLoad(true);
        fetch(`${process.env.REACT_APP_API_URL}/id`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ userId: searchText.trim() }),
        })
        .then(res => res.json())
        .then(res => {
            if (res) {
                setData([res]);
                setTotalPages(1)
            }
        })
        .catch(console.error)
        .finally(() => setLoad(false));
    };

    const clickSearchDate = () => {
        // const filtered = data.filter(item => {
        //     const itemDate = new Date(item.createDate).getTime();
        //     return itemDate >= new Date(startDate).getTime() && itemDate <= new Date(endDate).getTime();
        // });
        // setData(filtered);
        setData([])
        setLoad(true)

        fetch(`${process.env.REACT_APP_API_URL}/datetime`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ 
                startDate: startDate,
                endDate: endDate
            }),
        })
        .then(res => res.json())
        .then(res => {
            if (res) {
                setData(res);
                setTotalPages(1);
            }
        })
        .catch(console.error)
        .finally(() => setLoad(false));
    };

    const handleDelete = (user) => {
        setLoad(true);
        fetch(`${process.env.REACT_APP_API_URL}/delete`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ userId: user.userId }),
        })
            .then(res => res.json())
            .catch(console.error)
            .finally(() => {
                setResetData(prev => !prev);
                setLoad(false);
            });
    };

    const handleClear = () => {
        setLoad(true);
        setPage(1);
        setSearchText("");
        setStartDate(fullDate);
        setEndDate(fullDate);
        setResetData(prev => !prev);
    };

    return (
        <div className="container" style={{ marginBottom: "20px" }}>
            <div className="row">
                <div className="col-12">
                    <div>
                        <button onClick={() => handleClear()}>clear</button>
                        <button onClick={handleDownloadExcel}>download excel</button>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        <TextInput
                            type="date"
                            value={startDate}
                            placeholder="start date"
                            name="startdate"
                            icon=""
                            label="start date"
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <button onClick={clickSearchDate}>filter</button>
                    </div>
                </div>
                <div className="col-5">
                    <div>
                        <TextInput
                            type="date"
                            value={endDate}
                            placeholder="end date"
                            name="enddate"
                            icon=""
                            label="end date"
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <TextInput
                            type="text"
                            value={searchText}
                            label="search user id"
                            placeholder="Enter User ID"
                            name="search"
                            icon=""
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button onClick={clickSearchText}>search</button>
                    </div>
                </div>
                <div className="col-12">
                    {load && <Loading />}
                </div>
                {data?.map((item) => (
                    <Item key={item._id} item={item} handleDelete={handleDelete} load={load} />
                ))}
                {totalPages > 1 && (
                    <div style={{ marginTop: "1rem" }}>
                        <button disabled={page === 1} onClick={() => setPage(prev => prev - 1)}>Previous</button>
                        <span style={{ margin: "0 1rem" }}>Page {page} of {totalPages}</span>
                        <button disabled={page === totalPages} onClick={() => setPage(prev => prev + 1)}>Next</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserList;

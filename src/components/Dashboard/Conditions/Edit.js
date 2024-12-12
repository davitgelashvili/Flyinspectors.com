import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextInput from "../../UI/TextInput";

const ConditionsEdit = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    const [update, setUpdate] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
      setTitle(data.title);
      setDescription(data.description);
    }, [data]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/conditions`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                const user = res.find((item) => item.userId == id);
                setData(user || {});
            });
    }, [update]);

    function handleClick(e) {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/conditions`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                title: title,
                description: description
            }),
        })
        .then((res) => res.json())
        .finally(() => {
            setUpdate(!update);
        });
    }

    return (
        <div className="container">
          <div>
          <TextInput
            type="text"
            value={title}
            placeholder="Enter title"
            name="title"
            icon=""
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />
          <TextInput
            type="textarea"
            value={description}
            placeholder="Enter description"
            name="desc"
            icon=""
            rows={50}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />
          <button onClick={handleClick}>edit</button>
        </div>
        </div>
    );
};

export default ConditionsEdit;
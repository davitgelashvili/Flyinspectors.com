import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextInput from "../../UI/TextInput";

const ConditionsAdd = () => {
    const [update, setUpdate] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");



    function handleClick(e) {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/conditions`, {
            method: "POST",
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
            rows={50}
            icon=""
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />
          <button onClick={handleClick}>add</button>
        </div>
        </div>
    );
};

export default ConditionsAdd;
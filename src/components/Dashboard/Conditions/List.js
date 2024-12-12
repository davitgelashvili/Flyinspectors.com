import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ConditionsList = () => {
  const [data, setData] = useState([]);

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
        setData(res);
        console.log("save data:", res);
      });
  }, []);

  return (
    <div className="container">
      <h3 style={{ color: "#007bff" }}><Link to={'add'}>add</Link></h3>
    {data?.map((item) => (
      <Link
        to={'edit'}
        key={item._id}
        className="d-flex justify-content-between" 
        style={{
          width:' 500px',
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s, box-shadow 0.3s",
          textDecoration: "none",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-5px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#007bff",
              marginBottom: "10px",
            }}
          >
            {item.title}
          </h3>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#007bff",
              marginBottom: "10px",
            }}
          >
            {item.description}
          </h3>
        </div>

          
      </Link>
    ))}
    </div>
  );
};

export default ConditionsList;
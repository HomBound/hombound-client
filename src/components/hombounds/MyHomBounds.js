import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import "../account/Account.css";
import HomBoundCard from "./HomBoundCard";
import "./HomBound.css";

const MyHomBounds = (props) => {
  const [myRequests, setMyRequests] = useState([]);

  useEffect(() => {
    const url = `${API_URL}/requests/requestedBy/${props.userId}`;
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMyRequests(data));
    } catch (err) {
      console.error(err);
    }
  }, [props.userId]);

  return (
    <div>
      <h1 className="account--header">My Requests</h1>
      <div className="hombound-cards">
        {myRequests.map((request) => (
          <HomBoundCard request={request} key={request.id} />
        ))}
      </div>
    </div>
  );
};
export default MyHomBounds;

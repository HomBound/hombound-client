import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import "../account/Account.css";

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
  }, []);

  return (
    <div>
      <h1 className="account--header">My Requests</h1>
      <div>
        {
          myRequests.map((request) => request.store)
          // .map((movie) => (
          //   <MovieCard movie={movie} key={movie.id} />
          // ))
        }
      </div>
    </div>
  );
};
export default MyHomBounds;

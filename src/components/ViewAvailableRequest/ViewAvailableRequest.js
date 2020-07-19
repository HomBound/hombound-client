import React from "react";
import { Link } from "react-router-dom";
import "./ViewAvailableRequest.css";
import useAvailableRequest from "../../hooks/useAvailableRequest";

const ViewAvailableRequest = (props) => {
  const requests = useAvailableRequest();

  return (
    <div className="items-container">
      {requests
        ? requests.map((request) => {
            return (
              <Link to={`/${request.id}`} className="item" key={request.id}>
                <div
                  className="item-img"
                  style={{
                    backgroundImage: "url('../../Assets/img/bg_card.jpeg')",
                  }}
                ></div>
                <p className="item-name">{request.store}</p>
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default ViewAvailableRequest;

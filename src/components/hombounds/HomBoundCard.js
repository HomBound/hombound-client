import React from "react";
import "./HomBound.css";
const HomBoundCard = (props) => {
  return (
    <div className="hombound-card">
      <h1>{props.request.store}</h1>
      <p>Status: {props.request.status}</p>
      <p>Items: {props.request.requestedItems?.length}</p>
    </div>
  );
};
export default HomBoundCard;

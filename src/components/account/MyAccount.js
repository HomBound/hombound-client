import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";

const MyAccount = (props) => {
  const welcomeMessage = props.user.volunteer
    ? "Thank you for helping us in the fight against Covid."
    : "Wishing you get better soon.";
  return (
    <div>
      <h1 className="account--header">Hello, {props.user.firstName}</h1>
      <h2 className="account--welcome">{welcomeMessage}</h2>
      <div className="account--options">
        {props.user.volunteer ? (
          <Link className="account--link">Ready To Help</Link>
        ) : (
          <div>
            <Link>Create a Request</Link>
            <Link>View My Requests</Link>
          </div>
        )}
      </div>
      <div className="account--grid">
        <h3>Account Details</h3>
        <div>
          {props.user.firstName} {props.user.lastName}
        </div>
      </div>
      {console.log(props)}
    </div>
  );
};
export default MyAccount;

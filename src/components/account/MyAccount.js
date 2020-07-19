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
          <>
            <Link to="/request-hombound" className="account--link">
              Create a Request
            </Link>
            <Link to="/my-hombounds" className="account--link">
              View My Requests
            </Link>
          </>
        )}
      </div>
      <div className="account--grid">
        <h3 className="account--section-title">Account Details</h3>
        <div className="account--details">
          Name: {props.user.firstName} {props.user.lastName}
        </div>
        <div className="account--details">Username: {props.user.username}</div>
        <div className="account--details">Email: {props.user.email}</div>
        <div className="account--details">
          Address: {props.user.address} {props.user.city}, {props.user.state}
        </div>
        <h3 className="account--section-title">Payment Methods</h3>
        {/* TODO: add payment details */}
      </div>
      {console.log(props)}
    </div>
  );
};
export default MyAccount;

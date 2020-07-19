import React from "react";

const MyAccount = (props) => {
  return (
    <div>
      <h1>Hello, {props.user.firstName}</h1>
      {console.log(props)}
    </div>
  );
};
export default MyAccount;

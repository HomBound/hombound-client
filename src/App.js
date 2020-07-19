import React from "react";
import Header from "./components/root/Header";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import CreateAccount from "./components/account/CreateAccount";
import MyAccount from "./components/account/MyAccount";
import SignIn from "./components/account/SignIn";

function App() {
  return (
    <nav className="navigation">
      <BrowserRouter>
        <Route path="/" render={(props) => <Header {...props} />} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/my-account" component={MyAccount} />
      </BrowserRouter>
    </nav>
  );
}

export default App;

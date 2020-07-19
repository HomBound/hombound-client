import React from "react";
import Header from "./components/root/Header";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import CreateAccount from "./components/account/CreateAccount";

function App() {
  return (
    <nav className="navigation">
      <BrowserRouter>
        <Route path="/" render={(props) => <Header {...props} />} />
        <Route path="/create-account" component={CreateAccount} />
      </BrowserRouter>
    </nav>
  );
}

export default App;

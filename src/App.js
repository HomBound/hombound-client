import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import CreateAccount from "./components/account/CreateAccount";
import MyAccount from "./components/account/MyAccount";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/homepage/HomePage";
import ContacUs from "./components/Contact/ContactUs";
import AboutUs from "./components/About/AboutUs";
import Account from "./components/Account/Account";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" render={Header} />
      <Route exact path="/" render={HomePage} />
      <Route path="/ContactUs" render={ContacUs} />
      <Route path="/AboutUs" render={AboutUs} />
      <Route path="/Account" render={Account} />
      <Route path="/create-account" component={CreateAccount} />
      <Route path="/my-account" component={MyAccount} />
      <Route path="/" render={Footer} />
    </BrowserRouter>
  );
}

export default App;

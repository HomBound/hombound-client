import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";


import Header from "./components/rootcomp/Header";
import Footer from "./components/rootcomp/Footer";
import HomePage from "./components/homepage/HomePage";
import ContacUs from "./components/contact/ContactUs";
import AboutUs from "./components/about/AboutUs";
import Account from "./components/account/Account";

function App() {
  return (

      <BrowserRouter>
        <Route path="/" render={Header} />
        <Route exact path="/" render={HomePage} />
        <Route path="/ContactUs" render={ContacUs} />
        <Route path="/AboutUs" render={AboutUs} />
        <Route path="/Account" render={Account} />
        <Route path="/" render={Footer} />
      </BrowserRouter>
  
  );
}

export default App;

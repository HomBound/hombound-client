import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/homepage/HomePage";
import ContacUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Account from "./components/Account";

function App() {
  return (

      <BrowserRouter>
        <Route path="/" render={Header} />
        <Route exact path="/" render={HomePage} />
        <Route path="/ContactUs" render={ContacUs}/>
        <Route path="/AboutUs" render={AboutUs} />
        <Route path="/Account" render={Account} />
        <Route path="/" render={Footer} />
      </BrowserRouter>

  );
}

export default App;

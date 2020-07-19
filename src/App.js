import React from "react";
import Header from "./components/RootComp/Header";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Footer from "./components/RootComp/Footer";
import HomePage from "./components/Homepage/HomePage";
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
        <Route path="/" render={Footer} />
        
      </BrowserRouter>
  
  );
}

export default App;

import React from "react";
import Header from "./components/RootComp/Header";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Footer from "./components/RootComp/Footer";
import HomePage from "./components/Homepage/HomePage";


function App() {
  return (
    <nav className="navigation">
      <BrowserRouter>
        <Route path="/" render={Header} />
        <Route exact path="/" render={HomePage} />
        <Route path="/" render={Footer} />
        
      </BrowserRouter>
    </nav>
  );
}

export default App;

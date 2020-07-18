import React from "react";
//import Constants, { API_URL } from "./constants";
import Header from "./components/RootComp/Header";
import Footer from "./components/RootComp/Footer";
import {BrowserRouter} from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <nav className="navigation">
      <BrowserRouter>
        <Route path="/" render={props => <Header {...props}/> } />
      </BrowserRouter>

      </nav>
  
  );
}

export default App;

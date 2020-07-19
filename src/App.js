import React from "react";
import Header from "./components/RootComp/Header";
import {BrowserRouter} from "react-router-dom";
import { Route } from "react-router-dom";
import Footer from "./components/RootComp/Footer";
import Banner from "./components/homepage/Banner";

function App() {
  return (
    <nav className="navigation">
      <BrowserRouter>
        <Route path="/" render={props => <Header {...props}/> } />
        <Route path="/" component={Banner} />
        <Route path="/" component={Footer} />
      </BrowserRouter>

      </nav>
  
  );
}

export default App;

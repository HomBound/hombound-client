import React from "react";
import Header from "./components/RootComp/Header";
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

import React, { Component } from "react";
import Header from "./components/root/Header";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import CreateAccount from "./components/account/CreateAccount";
import MyAccount from "./components/account/MyAccount";
import SignIn from "./components/account/SignIn";
import Footer from "./components/Footer";
import HomePage from "./components/homepage/HomePage";
import ContacUs from "./components/Contact/ContactUs";
import AboutUs from "./components/About/AboutUs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      userId: null,
      user: {},
    };
  }

  componentWillMount() {
    //pull from local storage
    localStorage.getItem("currentUser") &&
      this.setState({
        user: JSON.parse(localStorage.getItem("currentUser")),
      });
    localStorage.getItem("userId") &&
      this.setState({
        userId: JSON.parse(localStorage.getItem("userId")),
      });
    localStorage.getItem("loggedIn") &&
      this.setState({
        loggedInStatus: JSON.parse(localStorage.getItem("loggedIn")),
      });
  }

  componentWillUpdate(nextProps, nextState) {
    //save to local storage
    localStorage.setItem("currentUser", JSON.stringify(nextState.user));
    localStorage.setItem("userId", JSON.stringify(nextState.userId));
    localStorage.setItem("loggedIn", JSON.stringify(nextState.loggedIn));
    localStorage.setItem("stateTime", Date.now()); //time-stamp
  }

  handleLoginStatus = (data) => {
    this.setState({
      loggedIn: true,
      userId: data.id,
      user: data,
    });
  };

  render() {
    return (
      <nav className="navigation">
        <BrowserRouter>
          <Route path="/" render={(props) => <Header {...props} />} />
          <Route exact path="/" render={HomePage} />
          <Route path="/create-account" component={CreateAccount} />
          <Route
            path="/sign-in"
            render={(props) => (
              <SignIn {...props} handleLoginStatus={this.handleLoginStatus} />
            )}
          />
          <Route
            path="/my-account"
            render={(props) => <MyAccount {...props} user={this.state.user} />}
          />
          <Route path="/AboutUs" render={AboutUs} />
          <Route path="/ContactUs" render={ContacUs} />
          <Route path="/" render={Footer} />
        </BrowserRouter>
      </nav>
    );
  }
}

export default App;

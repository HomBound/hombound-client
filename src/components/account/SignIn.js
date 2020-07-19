import React, { Component } from "react";
import "../Form.css";
import Loader from "react-loader-spinner";
import { API_URL } from "../../constants";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    loading: false,
    error: "",
    user: {},
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { username, password } = this.state;

    // TODO: add form validation
    const endpoint = `${API_URL}/users/login`;
    const login = {
      username,
      password,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    };
    try {
      const response = await fetch(endpoint, options);
      if (response.status === 500) {
        console.log("User does not exist!");
        this.setState({
          error: "User does not exist!",
          loading: false,
        });
      } else {
        let data = await response.json();
        this.setState({ user: data, loading: false });
        this.props.handleLoginStatus(data);
        this.props.history.push("/my-account");
      }
    } catch (err) {
      this.setState({
        error: "Password is incorrect!",
        loading: false,
      });
      console.error(err);
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.submitForm}>
        <h1 className="form--title">Let's Stay Safe</h1>
        <p className="form--p">Welcome back.</p>
        <div className="form--grid">
          <input
            type="text"
            id="username"
            className="form--input"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            id="password"
            className="form--input"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button className="form--btn" type="submit">
            Sign In
          </button>
          <Loader
            visible={this.state.loading}
            type="Circles"
            color="rgb(93, 193, 240)"
            height={100}
            width={100}
            className="form--spinner"
          />
          <div className="form-error">
            {!this.state.loading ? this.state.error : ""}
          </div>
        </div>
      </form>
    );
  }
}
export default SignIn;

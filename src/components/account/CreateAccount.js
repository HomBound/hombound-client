import React, { Component } from "react";
import "./Form.css";
import { API_URL } from "../../constants";
import Loader from "react-loader-spinner";

class CreateAccount extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    verifyPassword: "",
    email: "",
    volunteer: false,
    address: "",
    city: "",
    state: "",
    loading: false,
    user: {},
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitForm = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const {
      firstName,
      lastName,
      username,
      password,
      // verifyPassword,
      email,
      volunteer,
      address,
      city,
      state,
    } = this.state;

    // TODO: add form validation
    const endpoint = `${API_URL}/users/create`;

    const user = {
      firstName,
      lastName,
      username,
      password,
      email,
      volunteer: volunteer === "on",
      address,
      city,
      state,
      active: true,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    try {
      const response = await fetch(endpoint, options);
      let data = await response.json();
      this.setState({ user: data, loading: false });
      this.props.history.push("/my-account");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.submitForm}>
        <h1 className="form--title">Let's Stay Safe</h1>
        <p className="form--p">
          Whether you need to stay at home or you want to give a helping hand in
          fighting COVID, sign up to get started.
        </p>
        <div className="form--grid">
          <input
            type="text"
            id="firstName"
            className="form--input"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="lastName"
            className="form--input"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="username"
            className="form--input"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <input
            type="email"
            id="email"
            className="form--input"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            id="password"
            className="form--input"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <input
            type="password"
            id="verifyPassword"
            className="form--input"
            placeholder="Verify Password"
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="address"
            className="form--input"
            placeholder="Address"
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="city"
            className="form--input"
            placeholder="City"
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="state"
            className="form--input"
            placeholder="State"
            onChange={this.handleChange}
          />
          <div className="form--volunteer">
            <label className="form--label">Volunteer</label>
            <input
              type="checkbox"
              id="volunteer"
              className="form--input checkbox"
              onChange={this.handleChange}
            />
          </div>
          <button className="form--btn" type="submit">
            Submit
          </button>
          <Loader
            visible={this.state.loading}
            type="Circles"
            color="rgb(93, 193, 240)"
            height={100}
            width={100}
            className="form--spinner"
          />
        </div>
      </form>
    );
  }
}

export default CreateAccount;

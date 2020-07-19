import React, { Component } from "react";
import { API_URL } from "../../constants";
import Loader from "react-loader-spinner";

class RequestHomBound extends Component {
  state = {
    store: "",
    request: {},
    loading: false,
    error: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitRequest = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { store } = this.state;
    const endpoint = `${API_URL}/users/login`;
    const request = { store };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    };
    try {
      const response = await fetch(endpoint, options);
      let data = await response.json();
      this.setState({ request: data, loading: false });
    } catch (err) {
      console.error(err);
      this.setState({
        error: "Could not submit request. Please try again later.",
      });
    }
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.submitRequest}>
          <h1 className="form--title">Let's Start a Request</h1>
          <p className="form--p">Please choose 1 store for your request.</p>
          <div className="form--grid">
            <input
              type="text"
              id="store"
              className="form--input single-input"
              placeholder="Store"
              onChange={this.handleChange}
            />
            <button className="form--btn" type="submit">
              Start
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
      </div>
    );
  }
}
export default RequestHomBound;

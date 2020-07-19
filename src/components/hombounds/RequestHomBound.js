import React, { Component } from "react";
import { API_URL } from "../../constants";
import Loader from "react-loader-spinner";

class RequestHomBound extends Component {
  state = {
    store: "",
    request: {},
    item: {}, // TODO: potentially make an array if we need to keep track of prev submitted items
    loading: false,
    error: "",
    adding: false,
    name: "",
    category: "Food",
    quantity: 0,
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitRequest = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { store } = this.state;
    const endpoint = `${API_URL}/requests/create/${this.props.userId}`;
    const request = { store };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    };
    try {
      const response = await fetch(endpoint, options);
      let data = await response.json();
      this.setState({ request: data, loading: false, adding: true });
    } catch (err) {
      console.error(err);
      this.setState({
        error: "Could not submit request. Please try again later.",
      });
    }
  };

  submitItem = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { name, category, quantity } = this.state;
    const endpoint = `${API_URL}/requests/${this.state.request.id}/add`;
    const item = { name, category, quantity };
    const itemWithUserId = {
      item,
      userId: this.props.userId,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemWithUserId),
    };

    try {
      const response = await fetch(endpoint, options);
      let data = await response.json();
      console.log(data);
      this.setState({
        item: data,
        loading: false,
        name: "",
        category: "Food",
        quantity: null,
      });
    } catch (err) {
      console.error(err);
      this.setState({
        error: "Could not submit item. Please try again later.",
      });
    }
  };

  doneRequest = async () => {
    this.setState({ loading: true });
    const endpoint = `${API_URL}/requests/${this.state.request.id}/submit`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await fetch(endpoint, options);
      let data = await response.json();
      this.setState({
        request: data,
        loading: false,
      });
    } catch (err) {
      console.error(err);
      this.setState({
        error:
          "Could not submit request. Please try again later. This request should be saved under your open requestes",
      });
    }
  };

  render() {
    return (
      <div>
        <form
          className={!this.state.adding ? "form" : "hidden"}
          onSubmit={this.submitRequest}
        >
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

        {/* ADDING ITEMS */}
        <form
          className={this.state.adding ? "form" : "hidden"}
          onSubmit={this.submitItem}
        >
          <h1 className="form--title">Add Your Items</h1>
          <p className="form--p">
            Please keep in mind that all items should be available at{" "}
            {this.state.store}
          </p>
          <div className="form--grid">
            <input
              type="text"
              id="name"
              className="form--input"
              placeholder="Item Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <select
              id="category"
              className="form--input"
              placeholder="Category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              <option value="Food">Food</option>
              <option value="Grocery">Grocery</option>
              <option value="Toiletry">Toiletry</option>
              <option value="Medicine">Medicine</option>
              <option value="Medicine">Other</option>
            </select>
            {console.log(this.state.category)}
            <input
              type="number"
              id="quantity"
              className="form--input single-input"
              placeholder="Quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
            <button className="form--btn" type="submit">
              Add
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
            <div className="form--two-btn">
              <button className="form--btn big-btn">Review</button>{" "}
              <button className="form--btn big-btn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default RequestHomBound;

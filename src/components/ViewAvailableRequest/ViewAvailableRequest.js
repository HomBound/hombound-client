import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ViewAvailableRequest.css";
import { API_URL } from "../../constants";

class ViewAvailableRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(`${API_URL}/requests/available`)
      .then((response) => response.json())
      .then((data) => this.setState({ requests: data, isLoading: false }));
  }

  render() {
    const { requests, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="items-container">
        {requests
          ? requests.map((request) => {
              return (
                <Link to={`/${request.id}`} className="item" key={request.id}>
                  <div
                    className="item-img"
                    style={{
                      backgroundImage: "url('../../Assets/img/bg_card.jpeg')",
                    }}
                  ></div>
                  <p className="item-name">{request.store}</p>
                </Link>
              );
            })
          : null}
      </div>
    );
  }
}

export default ViewAvailableRequest;

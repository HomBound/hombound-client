import { useState, useEffect } from "react";
import { API_URL } from "../constants";

const useAvailableRequest = () => {
  const availableRequestsEndpoint = "requests/available";

  const [request, setRequest] = useState(null);

  //TODO: Log error and implement loading

  const getData = (endpoint) => {
    return fetch(`${API_URL}${endpoint}`).then((res) =>
      res.json().then((data) => data)
    );
  };

  useEffect(() => {
    Promise.all([getData(availableRequestsEndpoint)]).then(([response]) => {
      setRequest(response);
    });
  }, []);

  return request;
};
export default useAvailableRequest;

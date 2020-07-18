export const API_URL =
  process.env.REACT_APP_HOMBOUND_ENV === "production"
    ? "https://hombound.herokuapp.com/api"
    : "http://localhost:8080/api";

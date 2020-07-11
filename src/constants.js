export const API_URL =
  process.env.REACT_APP_HOMBOUND_ENV === "develop"
    ? "http://localhost:8080"
    : "hosted-api";

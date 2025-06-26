import axios from "axios";

const api = axios.create({
  baseURL: "http://0.0.0.0:8080", // replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

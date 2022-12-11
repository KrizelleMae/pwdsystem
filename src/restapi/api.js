import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/pwd-backend/API/",
});
export default api;

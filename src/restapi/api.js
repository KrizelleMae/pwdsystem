import axios from "axios";

const api = axios.create({
  // baseURL: "http://pwd-jobszc.online/API/",
  baseURL: "http://localhost/pwd-backend/API/",
});
export default api;

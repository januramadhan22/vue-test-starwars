import axios from "axios";

const axiosSetup = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export default axiosSetup;

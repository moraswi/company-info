import Axios from "axios";

const apiClient = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  // get all information
  getEmployees() {
    return apiClient.get("/posts");
  },

  //   get single information
  getEmployee(id) {
    return apiClient.get("/posts/" + id);
  },

  postEmployee(){}
};

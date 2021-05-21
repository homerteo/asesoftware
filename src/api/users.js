import apiClient from "../config/apiClient";
import urlApi from "../config/app";

const userService = {};

userService.getUserList = (userId = "") => {
  return apiClient.APP.get(`${urlApi}/users/${userId}`)
    .then(response => response.data)
}

export default userService;

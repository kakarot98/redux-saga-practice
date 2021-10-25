import axios from "axios";

export function requestGetUser() {
  return axios.reques({
    method: "get",
    url: "https://fakestoreapi.com/users/1"
  });
}

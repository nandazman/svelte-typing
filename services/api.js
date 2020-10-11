import axios from "axios";

const axiosAPI = axios.create({
  baseURL : "https://type.fit/api/quotes"
})

const apiRequest = (method, url) => {
  return axiosAPI({
    method,
    url
  })
}

const get = (url, request) => apiRequest("get", url);

export default {
  get
}
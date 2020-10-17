import axios from "axios";

const axiosAPI = axios.create({
  baseURL : "https://type.fit/api/quotes"
})

const apiRequest = (method: any, url: string) => {
  return axiosAPI({
    method,
    url
  })
}

const get = (url?: string) => apiRequest("get", url);

export default {
  get
}
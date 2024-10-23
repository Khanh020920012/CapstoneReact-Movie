import axios from "axios";
import { getLocalStorage } from "../utils/util";
import { startLoading, stopLoading } from "../redux/slice/loadingSlice";
import { store } from "../redux/configStore";
export const http = axios.create({
  // Your axios configurations
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTXHUwMGUxbmcgMTAiLCJIZXRIYW5TdHJpbmciOiIzMS8xMi8yMDI1IiwiSGV0SGFuVGltZSI6MTc2NzIyNTU5OTAwMCwibmJmIjoxNjk4Njg1MjAwLCJleHAiOjE3NjcyMjU1OTl9.loRPS1RZwfJ0WEe5S9bQER2C0PiRLuJ-8r3CREErSLs",
    Authorization: `Bearer ${getLocalStorage("user")?.accessToken}`,
  },
  timeout: 300000,
});
// http.interceptors.request.use(
//   (config) => {
//     store.dispatch(startLoading());
//     return config;
//   },
//   (error) => {
//     store.dispatch(stopLoading());
//     return Promise.reject(error);
//   }
// );

// http.interceptors.response.use(
//   (response) => {
//     store.dispatch(stopLoading());
//     return response;
//   },
//   (error) => {
//     store.dispatch(stopLoading());
//     return Promise.reject(error);
//   }
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const response = await axios.post("/token", {
        token: localStorage.getItem("refreshToken"),
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      return axios(originalRequest);
    }
    throw error;
  }
);

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

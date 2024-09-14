// src/config/axiosConfig.js

import axios from "axios";
import { apiString } from "../services/apicalls";

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: apiString, // Base URL for the API
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Add any other default headers here
  },
});

// Request interceptor for adding authentication token if needed
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors here
    // For example, redirect to login on 401 Unauthorized
    if (error.response && error.response.status === 401) {
      // Redirect to login page or show a login modal
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

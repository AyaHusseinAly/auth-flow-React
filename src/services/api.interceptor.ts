import axios from "axios";
import * as authService from "./authSerivce";

const axiosInstance = axios.create();

// After every response of protected routes
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response OK:", response.status, response.data);
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized! token expired. gettinge new one ..");
      const res = await authService.refreshAccessToken();
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${res.accessToken}`;

    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

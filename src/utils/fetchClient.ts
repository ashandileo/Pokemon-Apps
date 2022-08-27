import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

import config from "../config";

const axiosInstance = axios.create({
  baseURL: config.HOST_API,
});

axiosInstance.interceptors.request.use((config) => {
  const newConfig = { ...config };

  if (config.params) {
    const newParams = { ...config.params };
    // eslint-disable-next-line array-callback-return
    Object.keys(newParams).map((key) => {
      // eslint-disable-next-line no-unused-expressions
      !newParams[key] && delete newParams[key];
    });
    newConfig.params = decamelizeKeys(newParams);
  }

  if (config.data) {
    newConfig.data = decamelizeKeys(config.data);
  }

  return newConfig;
});

const onSuccess = (response: any) => {
  return {
    data: camelizeKeys(response.data),
    statusCode: response.status,
    isSuccess: true,
  };
};

const onError = (error: any) => {
  return {
    data: null,
    meta: null,
    statusCode: error?.response?.status,
    isSuccess: false,
    error: camelizeKeys(error?.response?.data),
  };
};

axiosInstance.interceptors.response.use(onSuccess, onError);

export default axiosInstance;

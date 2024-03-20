import axios from "axios";

export const BASE_URL = "https://rssoepraoen.com/api-layanan/api";
export const WEBSERVICE_URL = "https://rssoepraoen.com/api-website/api";
export const IMAGE_URL = "https://rssoepraoen.com/api-website/storage";

export const HTTP = {
  GET: async (path) => {
    const res = await axios.get(BASE_URL + path);
    return res;
  },
  POST: async (path, data) => {
    const res = await axios.post(BASE_URL + path, data);
    return res;
  },
  PUT: async (path, data) => {
    const res = await axios.put(BASE_URL + path, data);
    return res;
  },
  DELETE: async (path) => {
    const res = await axios.delete(BASE_URL + path);
    return res;
  },
  PATCH: async (path, data) => {
    const res = await axios.patch(BASE_URL + path, data);
    return res;
  },
};

export const WEBSERVICE = {
  GET: async (path) => {
    const res = await axios.get(WEBSERVICE_URL + path);
    return res;
  },
  POST: async (path, data) => {
    const res = await axios.post(WEBSERVICE_URL + path, data);
    return res;
  },
  PUT: async (path, data) => {
    const res = await axios.put(WEBSERVICE_URL + path, data);
    return res;
  },
  DELETE: async (path) => {
    const res = await axios.delete(WEBSERVICE_URL + path);
    return res;
  },
  PATCH: async (path, data) => {
    const res = await axios.patch(WEBSERVICE_URL + path, data);
    return res;
  },
};

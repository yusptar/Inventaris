import axios from "axios";

export const BASE_URL = "https://rssoepraoen.com/api-website/api";
// export const BASE_URL = "http://192.168.10.229:8000/api";
// export const BASE_URL = "http://192.168.10.153:8000/api";
export const WEBSERVICE_URL = "https://rssoepraoen.com/bios/api";
// export const WEBSERVICE_URL = "http://192.168.10.229:8001/api";
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


// import axios, { AxiosInstance } from "axios";
import type { AxiosInstance } from "axios";
import process from 'process';
import axios from "axios";


const public_api_url = process.env.API_URL;
console.log(process.env.API_URL)
console.log(public_api_url);

const apiClient: AxiosInstance = axios.create({
  baseURL: public_api_url,
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
import axios from "axios";

export const instanceAxiosLogin = axios.create({
  baseURL: 'https://test-api-y04b.onrender.com',
  timeout: 5000,
});

export const instanceAxios = axios.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1/carros/marcas',
  timeout: 5000,
});
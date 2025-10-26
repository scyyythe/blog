import axios from 'axios';

const API_BASE = import.meta.env?.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

// Generic helpers
export const get = (path, config = {}) => api.get(path, config).then(res => res.data);
export const post = (path, payload, config = {}) => api.post(path, payload, config).then(res => res.data);
export const put = (path, payload, config = {}) => api.put(path, payload, config).then(res => res.data);
export const del = (path, config = {}) => api.delete(path, config).then(res => res.data);


export const getApi = () => get('/api');

export default api;

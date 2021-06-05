import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    apiKey: process.env.REACT_APP_NEWS_API_KEY,
  },
});

export default apiInstance;

import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:5000/api/v1/general',
  baseURL: 'https://shc-backend.onrender.com/api/v1/general',
});

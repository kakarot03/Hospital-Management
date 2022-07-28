import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000/api/v1/appointment',
  // baseURL: 'https://sri-health-care.herokuapp.com/api/v1/appointment',
});

import axios from 'axios';

const ApiConnection = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true
});

export default ApiConnection;

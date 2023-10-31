import axios from 'axios';

export const user = {
  get: id => {
    return axios.get(`http://localhost:3001/users/${id}`);
  },
};

import axios from "axios";

export const user = {
  getAll: (params) => {
    return axios
      .get(`http://localhost:3001/users`, { params: params })
      .then((res) => {
        console.log("res.headers:", res.headers);
        return {
          totalCount: res.headers["x-total-count"],
          data: res.data,
          currentPage: params._page,
          rowCount: params._limit,
          pageCount: params.pageCount,
        };
      });
  },
  get: (id) => {
    return axios.get(`http://localhost:3001/users/${id}`);
  },
  getByEmail: (email) => {
    return axios
      .get(`http://localhost:3001/users`, { email: email })
      .then((res) => res.data);
  },
  getByName: (name) => {
    return axios
      .get(`http://localhost:3001/users`, { name: name })
      .then((res) => res.data);
  },
  searchByEmail: (email) => {
    return axios
      .get(`http://localhost:3001/users`, { email_like: email })
      .then((res) => res.data);
  },
  searchByName: (name) => {
    return axios
      .get(`http://localhost:3001/users`, { name_like: name })
      .then((res) => res.data);
  },
  post: (params) => {
    return axios
      .post(`http://localhost:3001/users/`, params)
      .then((res) => res.data);
  },
  put: (params) => {
    return axios
      .put(`http://localhost:3001/users/${params.id}`, params)
      .then((res) => res.data);
  },
  delete: (id) => {
    return axios
      .delete(`http://localhost:3001/users/${id}`)
      .then((res) => res.data);
  },
};

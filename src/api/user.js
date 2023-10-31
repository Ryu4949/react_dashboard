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

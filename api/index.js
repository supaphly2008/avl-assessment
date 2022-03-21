import axios from "axios";

const getSearch = (page = 1, pageSize = 10, keyword = "") => {
  return axios.get(`https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
};

export { getSearch };

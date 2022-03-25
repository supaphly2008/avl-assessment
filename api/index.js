import axios from "axios";

const getSearch = (page = 1, pageSize = 10, keyword = "") => {
  return axios.get(`https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`).then((res) => {
    return {
      data: res.data,
      status: res.status,
    };
  });
};

const getFollowers = (page = 1, pageSize = 20) => {
  return axios.get(`https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${pageSize}`).then((res) => {
    return {
      data: res.data,
      status: res.status,
    };
  });
};

const getFollowing = (page = 1, pageSize = 20) => {
  return axios.get(`https://avl-frontend-exam.herokuapp.com/api/users/friends?page=${page}&pageSize=${pageSize}`).then((res) => {
    return {
      data: res.data,
      status: res.status,
    };
  });
};
const getTags = () => {
  return axios.get("https://avl-frontend-exam.herokuapp.com/api/tags").then((res) => {
    return {
      data: res.data,
      status: res.status,
    };
  });
};

export default { getSearch, getFollowers, getFollowing, getTags };

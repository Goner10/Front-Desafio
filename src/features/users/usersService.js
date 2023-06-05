import axios from "axios";
const API_URL = 'http://localhost:8080'
const login = async (loginData) => {
  const res = await axios.post(API_URL+'/login',loginData);
 
  return res.data;
};


const usersService = {
    login
};

export default usersService;
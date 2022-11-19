import axios from "axios";
import AuthBarier from '../../utils/auth/AuthBarier';

const API_URL = "http://46.148.238.230:5001/api/user/";

class AuthService {
    register(email, password, passwordReinput) {
      return axios.post(API_URL + "register", {
        email,
        password,
        passwordReinput,
        headers: AuthBarier()
      });
    }
    login(email, password) {
      return axios.post(API_URL + "login", {
        email,
        password,
        headers: AuthBarier()
      })
    }
  }
  

  export default new AuthService();
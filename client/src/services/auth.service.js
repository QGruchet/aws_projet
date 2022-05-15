//import ApiConnection from '../utils/api-connection';
import axios from 'axios';

class AuthService {
  login(username, password) {
    const res = ApiConnection.post('user/login', {
        username,
        password
      });
    console.log(res);
    if (res.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(res.data));
    }
    return res.data;
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  logout() {
    localStorage.removeItem('user');
  }

  signUp(u, e, p) {
    axios.post('http://localhost:3000/user/sign-up',
      {
        username: u,
        email: e,
        password: p
      }
    ).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }
}

export default new AuthService();

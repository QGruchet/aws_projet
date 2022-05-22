class AuthService {
  authHeader() {
    const user = this.getCurrentUser();
    if (user)
      return { 'Authorization': 'Bearer ' + user.accessToken };
    return {};
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isAuthenticated() {
    return !!this.getCurrentUser();
  }

  login(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  changeName(data) {
    console.log(data)
    localStorage.setItem('user', JSON.stringify(data));
  }

  changePswrd(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();

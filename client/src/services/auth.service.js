import io from 'socket.io-client';

class AuthService {
  constuctor() {
    this.gameSocketInstance = null;
  }

  authHeader() {
    const u = this.getCurrentUser();
    return u ? { 'Authorization': 'Bearer ' + u.accessToken } : {};
  }

  gameSocket() {
    if (!this.gameSocketInstance)
    {
      this.gameSocketInstance = io('http://localhost:3000/game', {
        query: { token: this.getCurrentUser().accessToken }, transports: ['websocket']
      });
    }
    return this.gameSocketInstance;
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

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();

import ApiConnection from "../utils/api-connection";

class UserService {
  me() {
    return ApiConnection.get('user/me', { headers: authHeader() });
  }
}
export default new UserService();

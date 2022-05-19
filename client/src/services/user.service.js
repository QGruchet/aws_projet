import ApiConnection from "../utils/api-connection";
import AuthService from "../services/auth.service";

class UserService {
  me() {
    return ApiConnection.get('user/me', { headers: AuthService.authHeader() });
  }
}
export default new UserService();

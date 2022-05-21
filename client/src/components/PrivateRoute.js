import { Navigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

const PrivateRoute = ({ children }) => {
  return AuthService.isAuthenticated() ? children : <Navigate to='/login' />;
}

export default PrivateRoute;

import { Navigate, Route } from 'react-router-dom';
import AuthService from '../services/auth.service';

const PrivateRoute = ({ children }) => {
  return AuthService.isAuthenticated() ? children : <Navigate to='/login' />;
}

const PublicRoute = ({ children }) => {
  return AuthService.isAuthenticated() ? <Navigate to='/'/> : children;
}

export { PrivateRoute, PublicRoute };

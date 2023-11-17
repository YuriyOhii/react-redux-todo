import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export const ReestrictedRoute = ({
  component: Component,
  redirectTo = '/',
}) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
};

import { useSelector } from 'react-redux';
import { Nav, NavigationLink } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/tasks">Tasks</NavigationLink>}
    </Nav>
  );
};

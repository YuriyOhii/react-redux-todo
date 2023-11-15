import { List, NavigationLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <List>
      <NavigationLink to="/register">Register</NavigationLink>
      <NavigationLink to="/login">LogIn</NavigationLink>
    </List>
  );
};

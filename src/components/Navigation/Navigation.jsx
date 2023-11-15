import { Nav, NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/tasks">Tasks</NavigationLink>
    </Nav>
  );
};

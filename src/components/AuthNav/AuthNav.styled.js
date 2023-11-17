import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  transition: color 300ms;
  &.active {
    color: red;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;

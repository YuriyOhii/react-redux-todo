import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  &:not(:last-of-type) {
    border-bottom: 1px solid #2f2f37;
  }
`;

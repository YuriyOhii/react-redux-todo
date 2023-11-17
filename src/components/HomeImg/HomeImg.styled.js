import styled from 'styled-components';
import image from './home_page_planner.jpg';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${image}) no-repeat center;
`;

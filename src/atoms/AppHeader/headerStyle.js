/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Header = styled.div`
  height: 5%;
  padding: 1%;
  color: #282c34;
  display: flex;
  align-items: center;
  font-weight: bold;

  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;

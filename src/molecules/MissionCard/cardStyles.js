/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  background-color: #fff;
  margin: 0 5%;

  .mission-details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text-container {
    margin: 2% 0;
    font-size: 18px;

    span {
      font-weight: bold;
    }
  }
`;

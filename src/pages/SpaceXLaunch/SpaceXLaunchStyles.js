/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  height: 100%;
  width: 100%;
  max-width: 1440px;
`;

export const Dashboard = styled.div`
  min-height: 80%;
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  & .column {
    display: flex;
    display: -ms-flexbox;
    -ms-flex: 20%;
    flex: 20%;
    max-width: 20%;
    align-items: center;
    justify-content: center;
  }

  & .content {
    display: flex;
    display: -ms-flexbox;
    -ms-flex: 78%;
    flex: 78%;
    max-width: 78%;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }

  @media screen and (max-width: 700px) {
    & .column {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
    }
  }

  @media screen and (max-width: 1024px) and (min-width: 701px) {
    & .column {
      -ms-flex: 50%;
      flex: 50%;
      max-width: 50%;
    }
  }

  @media screen and (max-width: 1440px) and (min-width: 1025px) {
    & .column {
      -ms-flex: 20%;
      flex: 20%;
      max-width: 20%;
    }
  }
`;

export const GridItem = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 4px;
`;

export const Row = styled.div`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
`;

export const Column = styled.div``;

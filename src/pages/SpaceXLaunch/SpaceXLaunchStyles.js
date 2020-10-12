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
  justify-content: space-between;

  & .column {
    display: flex;
    display: -ms-flexbox;
    -ms-flex: 20%;
    flex: 20%;
    max-width: 20%;
    align-items: flex-start;
    justify-content: center;
  }

  & .content {
    display: flex;
    display: -ms-flexbox;
    -ms-flex: 78%;
    flex: 78%;
    max-width: 78%;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;

    & .item {
      display: flex;
      display: -ms-flexbox;
      -ms-flex: 25%;
      flex: 25%;
      max-width: 25%;
      align-items: flex-start;
      justify-content: center;
      padding-bottom: 2%;
    }
  }

  @media screen and (max-width: 700px) {
    & .column,
    .content {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;

      & .item {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
      }
    }
  }

  @media screen and (max-width: 1024px) and (min-width: 701px) {
    & .column,
    .content {
      -ms-flex: 50%;
      flex: 50%;
      max-width: 50%;

      & .item {
        -ms-flex: 100%;
        flex: 100%;
        max-width: 100%;
      }
    }
  }
`;

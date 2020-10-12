/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FilterContainer = styled.div`
  background-color: white;
  padding: 2%;
  max-width: 258px;
  margin-bottom: 2%;

  .title {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    text-align: center;
    color: #fff;
    background-color: #272c34;
    margin: 7% 0 10% 0;
  }
`;

export const CustomLink = styled(Link)`
  padding: 10px 40px;
  font-size: 18px;
  color: ${(props) => (props.isActive ? '#fff' : '#272c34')};
  background-color: ${(props) => (props.isActive ? '#272c34' : '#e6e6e6')};
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
`;

export const FilterContent = styled.div`
  display: flex;
  flex-direction: column;

  .filter-row {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .filter {
    display: flex;
    flex: 50%;
    min-width: 50%;
    justify-content: center;
    padding: 2% 0;
  }
`;

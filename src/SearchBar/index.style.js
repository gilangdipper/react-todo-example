import styled from 'styled-components'

export const SearchBarWrapper =  styled.div`
  display: inline-block;
  input {
    border: none;
    border-bottom: 1px solid lightgreen;
    width: 220px;
    &:focus {
      outline: none;
    }
    margin-right: 10px;
  }
`;

export const Wrapper = styled.div`
  display: inline-block;  
`; 

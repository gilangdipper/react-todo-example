import styled from 'styled-components'

export const ItemWrapper =  styled.div`
  li {
    &:hover {
      cursor: pointer;
    }
  }
  span {
    &.completed {
      text-decoration: line-through;
    }
    &.remove {
      color: red;
      font-weight: 700;
      margin-left: 10px;
    }
  }
  .highlight {
    background-color: yellow;
  }
`
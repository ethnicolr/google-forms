/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 18px;
  font-size: 14px;
  poiner: cursor;
  letter-spacing: 0.2px;
  cursor: pointer;
  ${'' /* color: ${(props) => (props.isSelected ? 'red' : 'green')}; */}
  &:hover {
    background-color: #eeeeee;
  }
`

export default function Option({ handleClick, value, children, isSelected }) {
  return (
    <ListItem onClick={() => handleClick(value, children)}>
      {React.Children.map(children, (child) => child)}
    </ListItem>
  )
}

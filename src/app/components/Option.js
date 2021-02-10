/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'

const ListItem = styled.li`
  padding: 5px 15px;
  font-size: 14px;
  poiner: cursor;
  letter-spacing: 0.2px;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`

export default function Option({ handleClick, value }) {
  return <ListItem onClick={() => handleClick(value)}>{value}</ListItem>
}

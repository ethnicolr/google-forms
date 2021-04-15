/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 18px;
  font-size: 14px;
  poiner: cursor;
  gap: 10px;
  letter-spacing: 0.2px;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`

export default function Option({ handleClick, value, children, isSelect }) {
  return (
    <ListItem onClick={() => handleClick(value, children)}>{children}</ListItem>
  )
}

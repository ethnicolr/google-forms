/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React, { useState } from 'react'
import styled from '@emotion/styled'

const List = styled.ul`
  display: ${(props) => (props.isHidden ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  z-index: 5;
  background: #ffffff;
  color: #000;
  list-style: none;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 2px rgba(60, 64, 67, 0.149);
  font-size: 15px;
  padding: 0;
`
const SeparatorLine = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`

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

function Item({ handleClick, value }) {
  return <ListItem onClick={() => handleClick(value)}>{value}</ListItem>
}

function Select({ children, onChange }) {
  const [hidden, setHidden] = useState(false)
  const [selected, setSelected] = useState(children[4].props.value)
  const toggle = () => setHidden(!hidden)
  const handleClick = (value) => {
    onChange(value)
    setSelected(value)
    toggle()
  }

  let type = null
  return (
    <>
      <button onClick={toggle}>{selected}</button>
      <List isHidden={hidden}>
        {React.Children.map(children, (child) => {
          //Allow type
          if (typeof child.type === 'string') return child
          const newChild = React.cloneElement(child, {
            handleClick,
          })
          const typeItem = newChild.props.value.split('-')[0]
          if (type !== null && type !== typeItem) {
            type = typeItem
            return (
              <>
                <SeparatorLine />
                {newChild}
              </>
            )
          }
          type = typeItem
          return newChild
        })}
      </List>
    </>
  )
}
export default function QuestionTypeSelect({ onSelect, selected }) {
  const handleChange = (value) => {
    onSelect(value)
  }
  return (
    <>
      <Select onChange={handleChange}>
        <Item value={'text-line'}>text-line</Item>
        <Item value={'text-paragraph'}>text-paragraph</Item>
        <Item value={'select-radio'}>select-radio</Item>
        <Item value={'select-check'}>select-check</Item>
        <Item value={'select-drop'}>select-drop</Item>
        <Item value={'range'}>range</Item>
        <Item value={'grid-radio'}>grid-radio</Item>
        <Item value={'grid-check'}>grid-check</Item>
        <Item value={'date'}>date</Item>
        <Item value={'time'}>time</Item>
      </Select>
    </>
  )
}

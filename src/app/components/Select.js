/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React, { useState } from 'react'
import styled from '@emotion/styled'

const SeparatorLine = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  margin: 8px 0;
`
export default function Select({ children, onChange }) {
  const [hidden, setHidden] = useState(false)
  const [selected, setSelected] = useState(children[0].props.children)

  const toggle = () => setHidden(!hidden)

  const handleClick = (value, children) => {
    onChange(value)
    setSelected(children)
    toggle()
  }

  function options() {
    let type = null
    return React.Children.map(children, (child) => {
      if (typeof child.type === 'string') return child
      const isSelect = child.props.value === selected
      const newChild = React.cloneElement(child, {
        handleClick,
        isSelect,
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
    })
  }

  return (
    <>
      <button
        css={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px 10px 15px 15px',
          width: '100%',
          background: 'none',
          outline: 'none',
          border: '1px solid #dadce0',
          borderRadius: '5px',
        }}
        onClick={toggle}
      >
        {React.Children.map(selected, (item) => item)}
      </button>
      <ul
        css={{
          display: hidden ? 'flex' : 'none',
          width: '310px',
          flexDirection: 'column',
          position: 'absolute',
          zIndex: '5',
          background: '#ffffff',
          color: '#000',
          listStyle: 'none',
          borderRadius: '4px',
          boxShadow:
            '0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 2px 6px 2px rgba(60, 64, 67, 0.149)',
          fontSize: '15px',
          padding: 0,
        }}
      >
        {options()}
      </ul>
    </>
  )
}

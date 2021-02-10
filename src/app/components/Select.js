/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React, { useState } from 'react'
import styled from '@emotion/styled'

const SeparatorLine = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`
export default function Select({ children, onChange }) {
  const [hidden, setHidden] = useState(false)
  const [selected, setSelected] = useState(children[0].props.value)

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
      <ul
        css={{
          display: hidden ? 'flex' : 'none',
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
      </ul>
    </>
  )
}

/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react'
import { useOnClickOutside } from './../hooks/useOnClickOutside'

export default function Select({ children, onChange, cssList, css }) {
  const [hidden, setHidden] = useState(false)
  const [selected, setSelected] = useState(children[0].props.children)
  const refWrap = useRef(null)

  useOnClickOutside(refWrap, () => setHidden(false))

  const handleClick = (value, children) => {
    onChange(value)
    setSelected(children)
    setHidden(false)
  }

  function generateOptions() {
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
            <div
              css={{
                borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                margin: '8px 0',
              }}
            />
            {newChild}
          </>
        )
      }
      type = typeItem
      return newChild
    })
  }

  return (
    <div ref={refWrap}>
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
          gap: '10px',
          ...css,
        }}
        onClick={() => setHidden(!hidden)}
      >
        {React.Children.map(selected, (item) => item)}
      </button>
      {hidden ? (
        <ul
          css={{
            display: 'flex',
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
            ...cssList,
          }}
        >
          {generateOptions()}
        </ul>
      ) : null}
    </div>
  )
}

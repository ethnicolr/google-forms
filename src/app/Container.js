/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react'
import { useOnClickOutside } from './hooks/useOnClickOutside'
import { EditStripe } from './lib'

export const ContextEditMod = React.createContext()

export default function Container({ isHead, ...props }) {
  const [edit, setEdit] = useState(false)

  const wrapperRef = useRef(null)

  const editMod = (boolean) => setEdit(boolean)

  useOnClickOutside(wrapperRef, editMod)
  const value = [edit, setEdit]
  return (
    <div
      css={{
        backgroundColor: '#fff',
        border: '1px solid #dadce0',
        padding: '25px 15px',
        borderRadius: '8px',
        textAlign: 'left',
        position: 'relative',
        marginBottom: '20px',
      }}
      ref={wrapperRef}
    >
      {' '}
      {isHead ? (
        <div
          css={{
            width: '100%',
            top: '0',
            right: '0',
            height: '10px',
            position: 'absolute',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            backgroundColor: 'rgb(103, 58, 183)',
            zIndex: '10',
          }}
        ></div>
      ) : null}
      {edit ? <EditStripe /> : null}
      <ContextEditMod.Provider value={value} {...props} />
    </div>
  )
}

export function useContextEditMod() {
  const context = React.useContext(ContextEditMod)
  if (!context) {
    throw new Error(
      'useContextEditMod must be used within the ContextEditMod.Provider'
    )
  }
  return context
}

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React, { useEffect, useState, useRef } from 'react'
import { useOnClickOutside } from './hooks/useOnClickOutside'
import {
  Button,
  Textarea,
  EditStripe,
  ContainerField,
  EditStripeInput,
} from './lib'

export const ContextEditMod = React.createContext()

export default function Container({ Component, head, data }) {
  const [edit, setEdit] = useState(true)

  const wrapperRef = useRef(null)

  const editMod = (boolean) => setEdit(boolean)

  useOnClickOutside(wrapperRef, editMod)

  return (
    <div
      css={{
        backgroundColor: '#fff',
        border: '1px solid #dadce0',
        padding: '25px 15px',
        borderRadius: '8px',
        textAlign: 'left',
        width: '500px',
        position: 'relative',
        marginBottom: '20px',
      }}
      ref={wrapperRef}
    >
      {' '}
      {head ? (
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
      <ContextEditMod.Provider value={{ edit }}>
        <Component data={data} />
      </ContextEditMod.Provider>
    </div>
  )
}
export function useEditMod() {
  return React.useContext(ContextEditMod)
}

/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import { EditStripe } from '../lib'
import { useContextEditMod } from './Wrapper'

export default function Container({ isHead, isView = false, children }) {
  const [edit] = useContextEditMod()

  return (
    <div
      css={{
        backgroundColor: '#fff',
        border: '1px solid #dadce0',
        padding: '25px 25px',
        borderRadius: '8px',
        textAlign: 'left',
        position: 'relative',
        marginBottom: '20px',
      }}
    >
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
      {children}
    </div>
  )
}

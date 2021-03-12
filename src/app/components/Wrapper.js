/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react'
import { useOnClickOutside } from './../hooks/useOnClickOutside'

export const ContextEditMod = React.createContext()

export default function Wrapper({ isHead, ...props }) {
  const [edit, setEdit] = useState(false)
  const wrapperRef = useRef(null)

  const handlerClick = (e) => {
    setEdit(true)
  }

  useOnClickOutside(wrapperRef, () => setEdit(false))

  const value = [edit]

  return (
    <div onClick={handlerClick} ref={wrapperRef}>
      <ContextEditMod.Provider value={value} {...props} />
    </div>
  )
}

export function useContextEditMod() {
  const context = React.useContext(ContextEditMod)
  if (!context) {
    return [false]
  }
  return context
}

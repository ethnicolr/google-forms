/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React, { useEffect, useState, useRef } from 'react'
import { Container } from './Container'
import { useOnClickOutside } from './hooks/useOnClickOutside'
import { Textarea, ContainerField, EditStripeInput } from './lib'

export default function Header({ edit }) {
  const [state, setState] = useState({
    title: 'Новая форма',
    desc: 'Описание',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((state) => ({
      ...state,
      [name]: value,
    }))
  }
  return (
    <>
      <form>
        <ContainerField>
          <Textarea
            spellCheck='false'
            value={state.title}
            onChange={handleChange}
            name='title'
            onFocus={(e) => e.target.select()}
          />
          {edit ? <EditStripeInput /> : null}
        </ContainerField>

        <ContainerField>
          <Textarea
            spellCheck='true'
            onChange={handleChange}
            name='desc'
            value={state.desc}
            onFocus={(e) => e.target.select()}
          />
          {edit ? <EditStripeInput /> : null}
        </ContainerField>
      </form>
    </>
  )
}

/** @jsxImportSource @emotion/react */

import React, { useState, useContext } from 'react'
import { ContextEditMod } from '../../components/Container'
import { TextareaGrey } from '../../lib'
import { Input, ContainerField, EditStripeInput } from '../../lib'

export default function questionHead({ changeTitle, edit }) {
  // const edit = useContext(ContextEditMod)
  const handleChange = (e) => {
    changeTitle(e.target.value)
  }
  return (
    <ContainerField>
      <Input
        css={{
          backgroundColor: edit ? '#f8f9fa' : 'transparent',
          fontSize: '16px',
          padding: '16px',
          boxSizing: 'border-box',
          '&:hover': { backgroundColor: edit ? '#f1f3f4' : 'transparent' },
        }}
        placeholder='вопрос'
        onChange={handleChange}
      />

      {edit ? <EditStripeInput /> : null}
    </ContainerField>
  )
}

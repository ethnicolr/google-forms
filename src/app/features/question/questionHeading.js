import React, { useState, useContext } from 'react'
import { ContextEditMod } from '../../Container'
import { TextareaGrey } from '../../lib'
import { Input, ContainerField, EditStripeInput } from '../../lib'

export default function QuestionHeading({ changeTitle, edit }) {
  // const edit = useContext(ContextEditMod)
  const handleChange = (e) => {
    changeTitle(e.target.value)
  }
  return (
    <ContainerField>
      <Input placeholder='вопрос' onChange={handleChange} />

      {edit ? <EditStripeInput /> : null}
    </ContainerField>
  )
}

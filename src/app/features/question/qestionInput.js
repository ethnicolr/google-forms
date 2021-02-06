import React, { useState, useContext } from 'react'
import { ContextEditMod } from './../../Container'
import { TextareaGrey } from './../../lib'
import { Textarea, ContainerField, EditStripeInput } from './../../lib'

export default function QestionInput() {
  const edit = useContext(ContextEditMod)
  console.log(edit)
  return (
    <ContainerField>
      <Textarea id='filled-secondary' placeholder='вопрос' isEdit={edit} />

      {edit ? <EditStripeInput /> : null}
    </ContainerField>
  )
}

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

export default function QestionInput() {
  return (
    <>
      <TextField
        id='filled-secondary'
        variant='filled'
        fullWidth
        placeholder='вопрос'
      />
    </>
  )
}

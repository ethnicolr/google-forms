import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import QuestionItems from '../../QuestionItems'
import QuestionSelected from './questionTypeSelect'

export default function QestionInput() {
  return (
    <div>
      <TextField id='filled-secondary' variant='filled' placeholder='вопрос' />
    </div>
  )
}

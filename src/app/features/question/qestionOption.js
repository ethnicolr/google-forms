import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import QiestionInput from './qestionSelectItem'
import { nanoid } from 'nanoid'
import { makeStyles } from '@material-ui/core/styles'
import QuestionSelect from './questionSelect'
import QuestionRange from './questionRange'
import QuestionText from './questionText'

const initialState = [{ value: 'Вариант 1', id: nanoid() }]
const useStyles = makeStyles({
  root: {
    marginTop: '20px',
  },
})
export default function QestionOption({ typeItems }) {
  const classes = useStyles()
  function renderSwitch(item) {
    const [type, mode] = item.split('-')

    switch (type) {
      case 'text':
        return <QuestionText mode={mode} />
      case 'range':
        return <QuestionRange />
      case 'select':
        return <QuestionSelect mode={mode} grid={false} />
      case 'grid':
        return <QuestionSelect mode={mode} grid={true} />
      default:
        return null
    }
  }

  return <>{renderSwitch(typeItems)}</>
}

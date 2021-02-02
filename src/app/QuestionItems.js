import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { nanoid } from 'nanoid'
import QuestionSelect from './features/question/questionSelect'
import QuestionRange from './features/question/questionRange'
import QuestionText from './features/question/questionText'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '70%',
  },
})

export default function QuestionItems({ typeItems }) {
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

  return <div className={classes.root}>{renderSwitch(typeItems)}</div>
}

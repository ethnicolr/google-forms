import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import QuestionItems from '../../QuestionItems'
import QuestionTypeSelect from './questionTypeSelect'
import QestionInput from './qestionInput'
import QestionOption from './qestionOption'

const useStyles = makeStyles({
  root: {
    border: '2px solid black',
    padding: '25px 15px',
    borderRadius: '5px',
    textAlign: 'left',
    width: '500px',
    marginTop: '25px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
})

export default function QuestionPage() {
  const [typeQuestion, setTypeQuestion] = useState('select-radio')

  const handleSelect = (type) => {
    setTypeQuestion(type)
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <QestionInput />
      <QuestionTypeSelect onSelect={handleSelect} selected={typeQuestion} />
      <QestionOption typeItems={typeQuestion} />
    </div>
  )
}

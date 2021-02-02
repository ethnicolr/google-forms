import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import QuestionTypeSelect from './questionTypeSelect'
import QestionInput from './qestionInput'
import QestionOption from './qestionOption'

const useStyles = makeStyles({
  root: {
    border: '2px solid #dedede;',
    backgroundColor: '#fff',
    padding: '25px 15px',
    borderRadius: '5px',
    textAlign: 'left',
    width: '500px',
    marginTop: '25px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  input: {
    width: '60%',
  },
  select: {
    width: '30%',
  },
  option: {
    width: '100%',
    marginTop: '30px',
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
      <div className={classes.input}>
        <QestionInput />
      </div>
      <div className={classes.select}>
        <QuestionTypeSelect onSelect={handleSelect} selected={typeQuestion} />
      </div>
      <div className={classes.option}>
        <QestionOption typeItems={typeQuestion} />
      </div>
    </div>
  )
}

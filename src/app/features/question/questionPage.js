import React, { useState, useRef, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import QuestionTypeSelect from './questionTypeSelect'
import QestionInput from './qestionInput'
import { ContextEditMod } from './../../Container'

import QestionOption from './qestionOption'
const useStyles = makeStyles({
  root: {
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
  const edit = useContext(ContextEditMod)

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.input}>
        <QestionInput />
      </div>
      {edit ? (
        <div className={classes.select}>
          <QuestionTypeSelect onSelect={handleSelect} selected={typeQuestion} />
        </div>
      ) : null}

      <div className={classes.option}>
        <QestionOption typeItems={typeQuestion} />
      </div>
    </div>
  )
}

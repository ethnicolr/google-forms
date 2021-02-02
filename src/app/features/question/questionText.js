import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
  title: {
    color: '#000',
  },
})
export default function QuestionText({ mode }) {
  const classes = useStyles()

  let text
  if (mode === 'paragraph') {
    text = 'Long answer text'
  }
  if (mode === 'line') {
    text = 'Short answer text'
  }
  return (
    <div>
      <h2 className={classes.title}>{text}</h2>
    </div>
  )
}

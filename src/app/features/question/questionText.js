import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'

export default function QuestionText({ mode }) {
  let text

  if (mode === 'paragraph') {
    text = 'Long answer text'
  }
  if (mode === 'line') {
    return (text = 'Short answer text')
  }
  return <div>{text}</div>
}

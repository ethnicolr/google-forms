import React, { useEffect, useRef } from 'react'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

export default function QuestionItem({ value, onDelete, id }) {
  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current.focus()
    inputEl.current.select()
  })

  return (
    <div>
      <Input
        inputRef={inputEl}
        id='standard-basic'
        fullWidth
        size='medium'
        name='title'
        value={value}
        variant='filled'
      />
      <IconButton aria-label='delete' onClick={() => onDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

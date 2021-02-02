import React, { useEffect, useRef, useState } from 'react'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

export default function QestionSelectItem({ initValue, onDelete, id, type }) {
  const [value, setValue] = useState(initValue)
  const inputEl = useRef(null)

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  useEffect(() => {
    inputEl.current.focus()
    inputEl.current.select()
  }, [])

  return (
    <>
      <Input
        inputRef={inputEl}
        id='standard-basic'
        fullWidth
        name='title'
        value={value}
        variant='filled'
        onChange={handleChange}
      />
    </>
  )
}

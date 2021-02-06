import React, { useEffect, useRef } from 'react'
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'

export default function QestionSelectItem({
  value,
  onChange,
  onDelete,
  id,
  type,
}) {
  const inputEl = useRef(null)

  const handleChange = (e) => {
    onChange(id, e.target.value)
  }
  useEffect(() => {
    inputEl.current.focus()
    inputEl.current.select()
  }, [])

  return (
    <>
      <RadioButtonUncheckedIcon color='disabled' />
      <Input
        inputRef={inputEl}
        id='standard-basic'
        fullWidth
        name='title'
        value={value}
        variant='filled'
        onChange={handleChange}
      />
      <IconButton aria-label='delete' onClick={() => onDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </>
  )
}

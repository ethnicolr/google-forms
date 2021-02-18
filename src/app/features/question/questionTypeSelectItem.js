/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
// import { useEditMod } from '../../Container'

// import Input from '@material-ui/core/Input'
import { EditStripeInput } from '../../lib'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'

const Input = styled.input`
  padding: 0;
  width: 100%;
  heigt: 100%;
  border: none;
  outline: none;
  padding: 15px 10px;
  &:hover {
    border-bottom: ${(props) =>
      props.isEdit ? '1px solid rgba(0, 0, 0, 0.12)' : 'none'};
  }
`

export default function QuestionTypeSelectItem({
  value,
  onChange,
  onDelete,
  id,
  type,
  edit,
}) {
  const inputEl = useRef(null)
  // const { edit } = useEditMod()
  const handleChange = (e) => {
    onChange(id, e.target.value)
  }
  useEffect(() => {
    inputEl.current.focus()
    inputEl.current.select()
  }, [])

  return (
    <div
      css={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <RadioButtonUncheckedIcon color='disabled' />
      <Input
        ref={inputEl}
        id='standard-basic'
        name='title'
        value={value}
        onChange={handleChange}
        isEdit={edit}
        onFocus={(e) => e.target.select()}
      />
      {edit ? (
        <IconButton aria-label='delete' onClick={() => onDelete(id)}>
          <DeleteIcon />
        </IconButton>
      ) : null}
    </div>
  )
}

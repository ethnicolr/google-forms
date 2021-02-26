/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { useContextEditMod } from './../../Container'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { Radio, CheckBox } from './../../assets/icons'

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
  index,
  length,
}) {
  const inputEl = useRef(null)
  const [edit] = useContextEditMod()

  const handleChange = (e) => {
    onChange(id, e.target.value)
  }
  useEffect(() => {
    inputEl.current.focus()
    inputEl.current.select()
  }, [])

  const IconType = (type) => {
    const icons = {
      radio: <Radio />,
      drop: `${index + 1}.`,
      check: <CheckBox />,
    }
    return icons[type]
  }

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
      {IconType(type)}
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
        length > 1 ? (
          <button onClick={() => onDelete(id)}>Delete</button>
        ) : null
      ) : null}
    </div>
  )
}

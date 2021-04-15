/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { useContextEditMod } from './../../components/Wrapper'
import { UnRadio, UnCheckBox } from './../../assets/icons'
import * as Icon from './../../assets/icons'

import { ButtonIcon } from './../../lib'

const Input = styled.input`
  padding: 0;
  width: 100%;
  heigt: 100%;
  border: none;
  outline: none;
  padding: 15px 10px;
  border: 1px solid transparent;
  fontsize: 14px;
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
  head,
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
      radio: <UnRadio />,
      drop: (
        <div
          css={{
            width: '20px',
            height: '20px',
            marginRight: '10px',
            fontSize: '14px',
          }}
        >{`${index + 1}.`}</div>
      ),
      checkbox: <UnCheckBox />,
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
      {head === 'column' ? `${index + 1}.` : IconType(type)}
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
          <ButtonIcon onClick={() => onDelete(id)}>
            <Icon.Cross />
          </ButtonIcon>
        ) : null
      ) : null}
    </div>
  )
}

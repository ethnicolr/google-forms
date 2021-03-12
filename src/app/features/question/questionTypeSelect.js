/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React, { useEffect, useState, useReducer } from 'react'
import QestionSelectItem from './questionTypeSelectItem'
import { useContextEditMod } from './../../components/Wrapper'
import { useSelectState } from './../../hooks/useSelectState'
import { List, ListItem, Button, ButtonAddParam } from './../../lib'
import { nanoid } from 'nanoid'

function stateReducer(state, action) {
  switch (action.type) {
    case 'create': {
      const value = `Вариант ${state.length + 1}`
      return [...state, { id: nanoid(), value, type: 'simple' }]
    }

    case 'createOther': {
      return [...state, { id: nanoid(), value: 'другое', type: 'other' }]
    }

    case 'delete': {
      return state.filter((item) => item.id !== action.id)
    }

    case 'edit': {
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, value: action.value }
        }
        return item
      })
    }
    default:
      break
  }
}
const initialState = [{ value: 'Ряд 1', id: nanoid() }]

export default function QuestionTypeSelect({
  mode,
  grid,
  head,
  updateParameters,
  data = initialState,
}) {
  const [edit] = useContextEditMod()
  const [state, dispatch] = useReducer(stateReducer, data)
  const [btnVisibl, setBtnVisibl] = useState(false)

  useEffect(() => {
    if (mode !== 'drop') {
      const otherExis = state.some((item) => item.type === 'other')
      setBtnVisibl(otherExis)
    } else {
      setBtnVisibl(true)
    }
  }, [state, mode])

  const addItem = () => dispatch({ type: 'create' })
  const addItemOther = () => dispatch({ type: 'createOther' })
  const deleteItem = (id) => dispatch({ type: 'delete', id })
  const editItem = (id, value) => dispatch({ type: 'edit', value, id })

  useEffect(() => {
    updateParameters(state, head)
  }, [updateParameters, state, head])

  return (
    <div>
      {grid ? <h4 css={{ color: '#000' }}>{head}</h4> : null}
      <List>
        {state.map((elem, ind, arr) => {
          return (
            <ListItem key={elem.id}>
              <QestionSelectItem
                head={head}
                initValue={elem.value}
                id={elem.id}
                onChange={editItem}
                onDelete={deleteItem}
                value={elem.value}
                type={mode}
                index={ind}
                length={arr.length}
              />
            </ListItem>
          )
        })}
      </List>
      {edit ? (
        <div>
          <ButtonAddParam variant='contained' onClick={addItem}>
            Добавить вариант
          </ButtonAddParam>
          {!btnVisibl && (
            <ButtonAddParam variant='contained' onClick={addItemOther}>
              Добавить вариант другое
            </ButtonAddParam>
          )}
        </div>
      ) : null}
    </div>
  )
}

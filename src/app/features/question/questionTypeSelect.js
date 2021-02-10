/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React, { useState, useEffect, useReducer, useContext } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import QestionSelectItem from './questionTypeSelectItem'
import { useEditMod } from '../../Container'
import { nanoid } from 'nanoid'

const useStyles = makeStyles({
  items: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    marginBottom: '20px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
    marginLeft: '10px',
  },
  icon: {
    paddingTop: '5px',
  },
})

function selectReducer(state, action) {
  switch (action.type) {
    case 'create': {
      return [...state, { value: `Вариант ${state.length + 1}`, id: nanoid() }]
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
export default function QuestionTypeSelect({
  mode,
  grid,
  head,
  updateQuestion,
  initialState,
}) {
  const [state, dispatch] = useReducer(
    selectReducer,
    initialState || [{ value: 'Вариант 1', id: nanoid() }]
  )
  const classes = useStyles()
  const { edit } = useEditMod()
  const addItem = () => dispatch({ type: 'create' })
  const deleteItem = (id) => dispatch({ type: 'delete', id })
  const editItem = (id, value) => dispatch({ type: 'edit', value, id })

  useEffect(() => {
    updateQuestion(state, head)
  }, [updateQuestion, state, head])

  return (
    <div>
      {grid ? <h4 css={{ color: '#000' }}>{head}</h4> : null}
      <ul className={classes.items}>
        {state.map((elem) => {
          return (
            <li className={classes.item} key={elem.id}>
              <QestionSelectItem
                initValue={elem.value}
                id={elem.id}
                onChange={editItem}
                onDelete={deleteItem}
                value={elem.value}
              />
            </li>
          )
        })}
      </ul>
      {edit ? (
        <Button variant='contained' onClick={addItem}>
          Добавить вариант
        </Button>
      ) : null}
    </div>
  )
}

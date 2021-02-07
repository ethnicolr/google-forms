import React, { useState, useEffect, useReducer, useContext } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import { nanoid } from 'nanoid'
import QestionSelectItem from './qestionSelectItem'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { StateContex } from './../../App'

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
export default function QestionSelect({ mode, grid }) {
  const [state, dispatch] = useReducer(selectReducer, [
    { value: 'Вариант 1', id: nanoid() },
  ])
  const classes = useStyles()

  const addItem = () => dispatch({ type: 'create' })
  const deleteItem = (id) => dispatch({ type: 'delete', id })
  const editItem = (id, value) => dispatch({ type: 'edit', value, id })
  const [updateItem] = useContext(StateContex)
  useEffect(() => {}, [state])

  return (
    <>
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
      <Button variant='contained' onClick={addItem}>
        Добавить вариант
      </Button>
    </>
  )
}

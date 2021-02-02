import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import { nanoid } from 'nanoid'
import QestionSelectItem from './qestionSelectItem'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

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

export default function QestionSelect({ mode, grid }) {
  const [state, setState] = useState([{ value: 'Вариант 1', id: nanoid() }])
  const classes = useStyles()

  const handleAddItem = () => {
    setState((state) => [
      ...state,
      { value: `Вариант ${state.length + 1}`, id: nanoid() },
    ])
  }
  const handleDelete = (id) => {
    console.log('check')
    setState((state) => state.filter((elem) => elem.id !== id))
  }

  return (
    <>
      <ul className={classes.items}>
        {state.map((elem) => {
          return (
            <li className={classes.item} key={elem.id}>
              <RadioButtonUncheckedIcon
                className={classes.icon}
                color='disabled'
              />
              <div className={classes.input}>
                <QestionSelectItem
                  initValue={elem.value}
                  id={elem.id}
                  onDelete={handleDelete}
                />
              </div>
              <IconButton
                aria-label='delete'
                onClick={() => handleDelete(elem.id)}
              >
                <DeleteIcon />
              </IconButton>
            </li>
          )
        })}
      </ul>
      <Button variant='contained' onClick={handleAddItem}>
        Добавить вариант
      </Button>
    </>
  )
}

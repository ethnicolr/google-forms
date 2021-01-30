import React, { useState } from 'react'
import QuestionItem from '../../QuestionItem'
import Button from '@material-ui/core/Button'
import { nanoid } from 'nanoid'
import QestionForm from './qestionOption'

export default function QestionSelectItem({ mode, grid }) {
  const [state, setState] = useState([{ value: 'Вариант 1', id: nanoid() }])

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
    <div>
      <ul>
        {state.map((elem) => {
          return (
            <li key={elem.id}>
              <QuestionItem
                value={elem.value}
                id={elem.id}
                onDelete={handleDelete}
              />
            </li>
          )
        })}
      </ul>
      <Button variant='contained' onClick={handleAddItem}>
        Добавить вариант
      </Button>
    </div>
  )
}

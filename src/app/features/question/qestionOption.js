import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import QiestionInput from './qestionSelectItem'
import QuestionSelect from './questionSelect'
import QuestionRange from './questionRange'
import QuestionText from './questionText'
import { nanoid } from 'nanoid'

const initialState = [{ value: 'Вариант 1', id: nanoid() }]

export default function QestionOption({ typeItems }) {
  function renderSwitch(item) {
    const [type, mode] = item.split('-')

    switch (type) {
      case 'text':
        return <QuestionText mode={mode} />
      case 'range':
        return <QuestionRange />
      case 'select':
        return <QuestionSelect mode={mode} grid={false} />
      case 'grid':
        return <QuestionSelect mode={mode} grid={true} />
      default:
        return null
    }
  }
  // const [items, setItems] = useState(initialState)

  // const handleAddItem = () => {
  //   setItems((state) => [
  //     ...state,
  //     { value: `Option ${items.length + 1}`, id: nanoid() },
  //   ])
  // }

  // const handleDelete = (id) => {
  //   setItems((state) => state.filter((item) => item.id !== id))
  // }

  return (
    <div>
      {renderSwitch(typeItems)}
      {/* <ul>
        {items.map((elem) => {
          return (
            <li key={elem.id}>
              {type}
              <QiestionInput
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
      </Button> */}
    </div>
  )
}

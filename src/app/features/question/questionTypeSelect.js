/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React, { useEffect } from 'react'
import QestionSelectItem from './questionTypeSelectItem'
import { useContextEditMod } from '../../Container'
import { useSelectState } from './../../hooks/useSelectState'
import { List, ListItem, Button } from './../../lib'

export default function QuestionTypeSelect({
  mode,
  grid,
  head,
  updateParameters,
  initialState,
}) {
  console.log(initialState)
  const [edit] = useContextEditMod()
  const [state, addItem, deleteItem, editItem] = useSelectState(initialState)

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
        <Button variant='contained' onClick={addItem}>
          Добавить вариант
        </Button>
      ) : null}
    </div>
  )
}

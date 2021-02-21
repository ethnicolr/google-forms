import React, { useReducer, useCallback } from 'react'
import { nanoid } from 'nanoid'

function stateReducer(state, action) {
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

export function useSelectState(data) {
  const [state, dispatch] = useReducer(stateReducer, data)

  const addItem = () => dispatch({ type: 'create' })
  const deleteItem = (id) => dispatch({ type: 'delete', id })
  const editItem = (id, value) => dispatch({ type: 'edit', value, id })

  return [state, addItem, deleteItem, editItem]
}

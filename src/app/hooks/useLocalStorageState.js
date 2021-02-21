import { useState, useEffect, useReducer, useCallback } from 'react'
import { nanoid } from 'nanoid'

function stateReducer(state, action) {
  switch (action.type) {
    case 'addQuestion': {
      const newQuestion = {
        id: nanoid(),
        title: '',
        type: 'select-radio',
        parameters: { items: [{ id: nanoid(), value: 'Вариант 1' }] },
      }
      return { ...state, questions: [...state.questions, newQuestion] }
    }

    case 'editQuestion': {
      const { question } = action.payload
      return {
        ...state,
        questions: state.questions.map((elem) =>
          elem.id === question.id ? question : elem
        ),
      }
    }

    case 'editHeader': {
      const [key, value] = action.payload
      const header = { ...state.header, [key]: value }
      return { ...state, header }
    }

    default:
      break
  }
}

export function useLocalStorageState(key, defaultValue = {}) {
  function init(defaultValue) {
    return JSON.parse(window.localStorage.getItem(key)) || defaultValue
  }
  const [state, dispatch] = useReducer(stateReducer, defaultValue, init)

  const addQuestion = () => dispatch({ type: 'addQuestion' })
  const editQuestion = useCallback(
    (question) => dispatch({ type: 'editQuestion', payload: { question } }),
    []
  )
  const editHeader = (key, value) =>
    dispatch({ type: 'editHeader', payload: [key, value] })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, addQuestion, editQuestion, editHeader]
}

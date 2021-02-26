import { useState, useEffect, useReducer, useCallback } from 'react'
import { nanoid } from 'nanoid'

function stateReducer(state, action) {
  switch (action.type) {
    case 'ADD_QUESTION': {
      const newQuestion = {
        id: nanoid(),
        title: '',
        type: 'select-radio',
        parameters: { items: [{ id: nanoid(), value: 'Вариант 1' }] },
      }
      return { ...state, questions: [...state.questions, newQuestion] }
    }

    case 'DELETE_QUESTION': {
      const filterQuestions = state.questions.filter(
        (question) => question.id !== action.payload
      )
      return { ...state, questions: filterQuestions }
    }

    case 'ClONE_QUESTION': {
      const question = state.questions.find(
        (question) => question.id === action.payload
      )
      const cloned = (question, newObj) => {
        const keys = Object.keys(question)
        return keys.reduce((result, key) => {
          let value = question[key]
          if (Array.isArray(value)) {
            result[key] = cloned(value, [])
          } else if (typeof value === 'object') {
            result[key] = cloned(value, {})
          }
          if (key === 'id') {
            result[key] = nanoid()
          } else {
            result[key] = value
          }

          return result
        }, newObj)
      }
      let newQuestion = cloned(question, {})
      return { ...state, questions: [...state.questions, newQuestion] }
    }

    case 'EDIT_QUESTION': {
      const { question } = action.payload
      return {
        ...state,
        questions: state.questions.map((elem) =>
          elem.id === question.id ? question : elem
        ),
      }
    }

    case 'EDIT_HEADER': {
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

  const addQuestion = () => dispatch({ type: 'ADD_QUESTION' })
  const deleteQuestion = useCallback((id) => {
    return dispatch({ type: 'DELETE_QUESTION', payload: id })
  }, [])

  const cloneQuestion = useCallback((id) => {
    return dispatch({ type: 'ClONE_QUESTION', payload: id })
  }, [])

  const editQuestion = useCallback(
    (question) => dispatch({ type: 'EDIT_QUESTION', payload: { question } }),
    []
  )
  const editHeader = (key, value) =>
    dispatch({ type: 'EDIT_HEADER', payload: [key, value] })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return {
    state,
    addQuestion,
    editQuestion,
    editHeader,
    deleteQuestion,
    cloneQuestion,
  }
}

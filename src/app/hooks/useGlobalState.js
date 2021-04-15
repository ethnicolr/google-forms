import { useEffect, useReducer, useCallback } from 'react'
import { globalState } from '../reducers/globalState'

export function useGlobalState(key, defaultValue = {}) {
  function init(defaultValue) {
    return JSON.parse(window.localStorage.getItem(key)) || defaultValue
  }
  const [state, dispatch] = useReducer(globalState, defaultValue, init)

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

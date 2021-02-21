import React, { useReducer, useCallback } from 'react'

function stateReducer(state, action) {
  switch (action.type) {
    case 'changeTitle':
      return { ...state, title: action.payload }

    case 'changeQuestionType':
      return { ...state, type: action.payload }

    case 'changeParameters': {
      const [params, type] = action.payload
      return {
        ...state,
        parameters: { ...state.parameters, [type]: params },
      }
    }

    default:
      break
  }
}

export default function useQuestionState(data) {
  const [state, dispatch] = useReducer(stateReducer, data)

  const changeTitle = useCallback(
    (value) => dispatch({ type: 'changeTitle', payload: value }),
    []
  )

  const changeQuestionType = useCallback(
    (type) => dispatch({ type: 'changeQuestionType', payload: type }),
    []
  )

  const changeParameters = useCallback(
    (params, type) =>
      dispatch({ type: 'changeParameters', payload: [params, type] }),
    []
  )

  return [state, changeTitle, changeQuestionType, changeParameters]
}

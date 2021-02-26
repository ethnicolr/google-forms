/** @jsxImportSource @emotion/react */
import React, { useReducer, useEffect, useCallback } from 'react'
import { useContextEditMod } from './../../Container'
import { useContextState } from './../../App'
import QestionInput from './questionHeading'
import QuestionTypeRender from './questionTypeRender'
import QuestionSwitch from './questionSwitch'

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

export default function QuestionPage({ data }) {
  const [state, dispatch] = useReducer(stateReducer, data)
  const {
    editQuestion: updateQuestion,
    deleteQuestion,
    cloneQuestion,
  } = useContextState()
  const [edit] = useContextEditMod()

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

  useEffect(() => {
    updateQuestion(state)
  }, [state, updateQuestion])

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <div css={{ width: '50%' }}>
        <QestionInput changeTitle={changeTitle} edit={edit} />
      </div>
      {edit ? (
        <div css={{ width: '40%' }}>
          <QuestionSwitch
            switchQieston={changeQuestionType}
            current={state.parameters.type}
          />
        </div>
      ) : null}

      <div css={{ width: '100%', marginTop: '30px' }}>
        <QuestionTypeRender
          typeItems={state.type}
          updateParameters={changeParameters}
          initialParam={state.parameters}
        />
      </div>
      <button onClick={() => deleteQuestion(state.id)}>Delete QUEST</button>
      <button onClick={() => cloneQuestion(state.id)}>clone QUEST</button>
    </div>
  )
}

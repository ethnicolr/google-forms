/** @jsxImportSource @emotion/react */
import React, { useReducer, useEffect, useCallback } from 'react'
import { useContextEditMod } from './../../components/Wrapper'
import { useContextState } from './../../App'
import QuestionHead from './questionHead'
import QuestionTypeRender from './questionTypeRender'
import QuestionSwitch from './questionSwitch'
import styled from '@emotion/styled'
import useQuestionState from '../../hooks/useQuestionState'
import { ButtonIcon } from './../../lib'
import * as Icon from './../../assets/icons'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default function QuestionPage({ data }) {
  const {
    editQuestion: updateQuestion,
    deleteQuestion,
    cloneQuestion,
  } = useContextState()

  const [
    state,
    changeTitle,
    changeQuestionType,
    changeParameters,
  ] = useQuestionState(data)

  const [edit] = useContextEditMod()

  useEffect(() => {
    updateQuestion(state)
  }, [state, updateQuestion])

  return (
    <Container>
      <QuestionHead changeTitle={changeTitle} edit={edit} title={data.title} />
      {edit && (
        <QuestionSwitch
          switchQieston={changeQuestionType}
          current={state.parameters.type}
        />
      )}
      <QuestionTypeRender
        typeItems={state.type}
        updateParameters={changeParameters}
        parameters={state.parameters}
      />
      <div
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <ButtonIcon onClick={() => deleteQuestion(state.id)}>
          <Icon.Delete />
        </ButtonIcon>
        <ButtonIcon onClick={() => cloneQuestion(state.id)}>
          <Icon.Copy />
        </ButtonIcon>
      </div>
    </Container>
  )
}

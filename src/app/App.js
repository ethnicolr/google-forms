/** @jsxImportSource @emotion/react */

import React, { useState, useCallback } from 'react'
import './App.css'
import Header from './Header'
import Container from './Container'
import QuestionPage from './features/question/questionPage'
import Button from '@material-ui/core/Button'
import { nanoid } from 'nanoid'
import { useLocalStorageState } from './hooks/useLocalStorageState'

export const StateContex = React.createContext()

const initialState = {
  questions: [],
  header: { title: 'Новая форма', desc: 'Описание' },
}

function App() {
  const {
    state,
    addQuestion,
    editQuestion,
    editHeader,
    deleteQuestion,
    cloneQuestion,
  } = useLocalStorageState('formData', initialState)

  const value = { state, editQuestion, deleteQuestion, cloneQuestion }

  return (
    <div css={{ margin: '100px auto', width: '650px' }}>
      <StateContex.Provider value={value}>
        <Container isHead={true}>
          <Header data={state.header} changeStateHeader={editHeader} />
        </Container>

        {state.questions.map((item) => {
          return (
            <Container key={item.id}>
              <QuestionPage data={item} />
            </Container>
          )
        })}
        <Button onClick={addQuestion} variant='contained'>
          Add question
        </Button>
      </StateContex.Provider>
    </div>
  )
}

export function useContextState() {
  return React.useContext(StateContex)
}

export default App

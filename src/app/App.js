import React, { useState, useCallback } from 'react'
import './App.css'
import Header from './Header'
import Container from './Container'
import QuestionPage from './features/question/questionPage'
import Button from '@material-ui/core/Button'
import { nanoid } from 'nanoid'

export const StateContex = React.createContext()
const initialState = {
  questions: [
    // {
    //   id: nanoid(),
    //   title: 'Вопрос',
    //   parameters: {
    //     // type: 'select',
    //     // items: [{type: 'radio', value: 'Вопрос'}]
    //     type: 'grid',
    //     items: {
    //       column: [],
    //       row: [],
    //     },
    //   },
    // },
  ],
  name: 'Новая форма',
  desc: 'Описание',
}

function App() {
  const [state, setState] = useState(initialState)

  const updateQuestion = useCallback(
    (id, newParam) =>
      setState((state) => ({
        ...state,
        questions: state.questions.map((elem) => {
          if (elem.id === id) {
            return newParam
          }
          return elem
        }),
      })),
    []
  )

  const addQuestion = () => {
    const newQuestion = {
      id: nanoid(),
      title: '',
      type: 'select-radio',
      parameters: { items: [{ value: 'Вариант 1' }] },
    }
    setState((state) => ({
      ...state,
      questions: [...state.questions, newQuestion],
    }))
  }
  const value = [state, updateQuestion]

  return (
    <div className='App'>
      <header className='App-header'>
        <StateContex.Provider value={value}>
          <Container Component={Header} head={true} />
          {state.questions.map((item) => {
            return (
              <Container Component={QuestionPage} key={item.id} data={item} />
            )
          })}
          <Button onClick={addQuestion} variant='contained'>
            Add question
          </Button>
        </StateContex.Provider>
      </header>
    </div>
  )
}

export function useContextState() {
  return React.useContext(StateContex)
}

export default App

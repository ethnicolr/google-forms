import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import Container from './Container'
import QuestionPage from './features/question/questionPage'
import Button from '@material-ui/core/Button'
import { nanoid } from 'nanoid'

export const StateContex = React.createContext()
const initialState = { questions: [], name: 'Новая форма', desc: 'Описание' }

function App() {
  const [state, setState] = useState(initialState)

  const updateItem = (id, value) =>
    setState((state) => ({
      ...state,
      questions: state.questions.map((elem) => {
        if (elem.id === id) {
          return value
        }
        return elem
      }),
    }))

  const addQuestion = () => {
    setState((state) => ({
      ...state,
      questions: [...state.questions, 'new'],
    }))
  }
  const value = [state, updateItem]
  return (
    <div className='App'>
      <header className='App-header'>
        <StateContex.Provider value={value}>
          <Container Component={Header} head={true} />

          {state.questions.map((item) => {
            return <Container Component={QuestionPage} key={nanoid()} />
          })}
          <Button onClick={addQuestion} variant='contained'>
            Add question
          </Button>
        </StateContex.Provider>
      </header>
    </div>
  )
}

export default App

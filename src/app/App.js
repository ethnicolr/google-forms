/** @jsxImportSource @emotion/react */

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import QuestionList from './features/question/questionList'
import ViewForm from './features/view/viewFormPage'
import { useGlobalState } from './hooks/useGlobalState'
import { Button } from './lib'
import Container from './components/Container'
import Wrapper, { useContextEditMod } from './components/Wrapper'

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
  } = useGlobalState('formData', initialState)

  const value = { state, editQuestion, deleteQuestion, cloneQuestion }

  return (
    <Router>
      <div
        css={{
          margin: '100px auto',
          width: '650px',
        }}
      >
        <StateContex.Provider value={value}>
          <Route exact path='/'>
            <Wrapper>
              <Container>
                <Header data={state.header} changeStateHeader={editHeader} />
              </Container>
            </Wrapper>
            <QuestionList questions={state.questions} />
            <div>
              <Button onClick={addQuestion} variant='contained'>
                Add question
              </Button>
              <Button onClick={() => window.open('/view')}>View</Button>
            </div>
          </Route>

          <Route exact path='/view'>
            <ViewForm />
          </Route>
        </StateContex.Provider>
      </div>
    </Router>
  )
}

export function useContextState() {
  return React.useContext(StateContex)
}

export default App

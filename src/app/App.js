import React from 'react'
import './App.css'
import Container from './Container'
import QuestionPage from './features/question/questionPage'

const initialState = {
  questions: [],
}
export const StateContex = React.createContext(initialState)

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <StateContex.Provider>
          <Container />
          <QuestionPage />
        </StateContex.Provider>
      </header>
    </div>
  )
}

export default App

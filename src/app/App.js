import './App.css'
import Container from './Container'
import QuestionPage from './features/question/questionPage'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Container />
        <QuestionPage />
      </header>
    </div>
  )
}

export default App

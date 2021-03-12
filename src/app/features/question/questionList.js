import React from 'react'
import Container from './../../components/Container'
import Wrapper from './../../components/Wrapper'
import QuestionPage from './questionPage'

export default function QuestionList({ questions }) {
  return (
    <>
      {questions.map((question) => {
        return (
          <Wrapper key={question.id}>
            <Container>
              <QuestionPage data={question} />
            </Container>
          </Wrapper>
        )
      })}
    </>
  )
}

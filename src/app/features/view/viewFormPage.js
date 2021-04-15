import React from 'react'
import { useContextState } from './../../App'
import ViewFormGrid from './viewFormGrid'
import Container from '../../components/Container'
import { Input, Textarea } from './../../lib'

export default function ViewFormPage() {
  const { state } = useContextState()

  const renderParapmenetrs = (type, parameters, name, key = 'items') => {
    const [baseType, subType] = type.split('-')

    const generateList = (inputType, list) => {
      return parameters[key].map((item) => {
        const { id, value } = item
        return (
          <li key={id}>
            <label htmlFor={id}>{value}</label>
            <input name={name} value={value} type={inputType} id={id}></input>
          </li>
        )
      })
    }
    switch (baseType) {
      case 'text': {
        return subType === 'line' ? (
          <Input type='text' placeholder='мой ответ' />
        ) : (
          <Textarea placeholder='мой ответ' />
        )
      }
      case 'select':
        return generateList(subType, parameters)
      case 'grid':
        console.log(parameters)
        return (
          <ViewFormGrid
            columns={parameters.column}
            rows={parameters.items}
            type={subType}
          />
        )
      default:
        return null
    }
  }
  return (
    <div>
      <Container isHead={true}>
        <h1>{state.header.title}</h1>
        <h2>{state.header.desc}</h2>
      </Container>
      {state.questions.map((question) => {
        const { id, title, desc, type, parameters } = question
        return (
          <Container key={id}>
            <h2>{title}</h2>
            {<h2>{desc}</h2> || null}
            <form>
              <ul>{renderParapmenetrs(type, parameters, id)}</ul>
            </form>
          </Container>
        )
      })}
    </div>
  )
}

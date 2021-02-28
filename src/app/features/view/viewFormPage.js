import React from 'react'
import { useContextState } from './../../App'
import ViewFormGrid from './viewFormGrid'

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
        return subType === 'line' ? <input type='text' /> : <textarea />
      }
      case 'select':
        return generateList(subType, parameters)
      case 'grid':
        return (
          <ViewFormGrid
            columns={parameters.column}
            rows={parameters.row}
            type={subType}
          />
        )
      default:
        return null
    }
  }
  return (
    <div>
      <h1>{state.header.title}</h1>
      <h2>{state.header.desc}</h2>
      {state.questions.map((question) => {
        const { id, title, desc, type, parameters } = question
        return (
          <div key={id}>
            <h2>{title}</h2>
            {<h2>{desc}</h2> || null}
            <form>
              <ul>{renderParapmenetrs(type, parameters, id)}</ul>
            </form>
          </div>
        )
      })}
    </div>
  )
}

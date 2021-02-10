/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import QuestionSelect from './questionTypeSelect'
import QuestionRange from './questionTypeRange'
import QuestionText from './questionTypeText'

const initialState = [{ value: 'Вариант 1', id: nanoid() }]

export default function QestionParameters({
  typeItems,
  updateQuestion,
  initialParam,
}) {
  function renderSwitch(item) {
    const [type, mode] = item.split('-')

    switch (type) {
      case 'text':
        return <QuestionText mode={mode} />
      case 'range':
        return <QuestionRange />
      case 'select':
        return (
          <QuestionSelect
            mode={mode}
            grid={false}
            updateQuestion={updateQuestion}
            head={'column'}
            initialState={initialParam.column}
          />
        )
      case 'grid':
        return (
          <div css={{ display: 'flex' }}>
            <QuestionSelect
              mode={mode}
              grid={true}
              head={'column'}
              initialState={initialParam.column}
              updateQuestion={updateQuestion}
            />
            <QuestionSelect
              mode={mode}
              grid={true}
              head={'row'}
              initialState={initialParam.row}
              updateQuestion={updateQuestion}
            />{' '}
          </div>
        )
      default:
        return null
    }
  }

  return <>{renderSwitch(typeItems)}</>
}

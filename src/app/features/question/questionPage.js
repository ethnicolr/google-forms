/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useCallback } from 'react'
import QuestionTypeSelect from './questionSwitch'
import QestionInput from './questionHeading'
import QestionParameters from './questionParameters'
import { useEditMod } from './../../Container'
import { useContextState } from './../../App'
import Select from './../../components/Select'
import Option from './../../components/Option'

export default function QuestionPage({ data }) {
  const [_, updateQuestion] = useContextState()
  const [state, setState] = useState(data)

  const [typeQuestion, setTypeQuestion] = useState('select-radio')

  const handleSelect = (type) => {
    setTypeQuestion(type)
  }
  const edit = useEditMod()
  const changeTitle = (value) => {
    setState((state) => ({ ...state, title: value }))
  }
  const changeQuestionType = (type) => {
    setState((state) => ({ ...state, type }))
  }

  const changeParameters = useCallback((params, type) => {
    setState((state) => ({
      ...state,
      parameters: { ...state.parameters, [type]: params },
    }))
  }, [])

  useEffect(() => {
    updateQuestion(state.id, state)
  }, [state, updateQuestion])

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <div css={{ width: '60%' }}>
        <QestionInput changeTitle={changeTitle} />
      </div>
      {edit ? (
        <div css={{ width: '30%' }}>
          <Select onChange={changeQuestionType} seleced={state.parameters.type}>
            <Option value={'text-line'}>text-line</Option>
            <Option value={'text-paragraph'}>text-paragraph</Option>
            <Option value={'select-radio'}>select-radio</Option>
            <Option value={'select-check'}>select-check</Option>
            <Option value={'select-drop'}>select-drop</Option>
            <Option value={'range'}>range</Option>
            <Option value={'grid-radio'}>grid-radio</Option>
            <Option value={'grid-check'}>grid-check</Option>
            <Option value={'date'}>date</Option>
            <Option value={'time'}>time</Option>
          </Select>
          {/* <QuestionTypeSelect onSelect={handleSelect} selected={typeQuestion} /> */}
        </div>
      ) : null}

      <div css={{ width: '100%', marginTop: '30px' }}>
        <QestionParameters
          typeItems={state.type}
          updateQuestion={changeParameters}
          initialParam={state.parameters}
        />
      </div>
    </div>
  )
}

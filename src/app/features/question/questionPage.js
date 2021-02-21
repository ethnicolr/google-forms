/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useCallback } from 'react'
import QuestionTypeSelect from './questionSwitch'
import QestionInput from './questionHeading'
import QuestionSwitch from './questionSwitch'
import { useContextEditMod } from './../../Container'
import { useContextState } from './../../App'
import Select from './../../components/Select'
import Option from './../../components/Option'
import useQuestionState from './../../hooks/useQuestionState'
import * as Icon from './../../assets/icons'

export default function QuestionPage({ data }) {
  const [_, updateQuestion] = useContextState()
  const [
    state,
    changeTitle,
    changeQuestionType,
    changeParameters,
  ] = useQuestionState(data)
  const edit = useContextEditMod()
  console.log(state)

  // const [typeQuestion, setTypeQuestion] = useState('select-radio')

  // const handleSelect = (type) => {
  //   setTypeQuestion(type)
  // }
  // const changeTitle = (value) => {
  //   setState((state) => ({ ...state, title: value }))
  // }
  // const changeQuestionType = (type) => {
  //   setState((state) => ({ ...state, type }))
  // }

  // const changeParameters = useCallback((params, type) => {
  //   setState((state) => ({
  //     ...state,
  //     parameters: { ...state.parameters, [type]: params },
  //   }))
  // }, [])

  useEffect(() => {
    updateQuestion(state)
  }, [state, updateQuestion])

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <div css={{ width: '50%' }}>
        <QestionInput changeTitle={changeTitle} edit={edit} />
      </div>
      {edit ? (
        <div css={{ width: '40%' }}>
          <Select onChange={changeQuestionType} seleced={state.parameters.type}>
            <Option value={'text-line'}>
              <Icon.Line />
              Текст (строка)
            </Option>
            <Option value={'text-paragraph'}>
              <Icon.Line />
              Текст (абзац)
            </Option>
            <Option value={'select-radio'}>
              <Icon.Radio />
              Один из списка
            </Option>
            <Option value={'select-check'}>
              <Icon.CheckBox />
              Несколько из списка
            </Option>
            <Option value={'select-drop'}>
              <Icon.Drop />
              Раскрывающийся список
            </Option>
            <Option value={'range'}>
              <Icon.Scale />
              Шкала
            </Option>
            <Option value={'grid-radio'}>
              <Icon.Grid />
              Сетка (можественный выбор)
            </Option>
            <Option value={'grid-check'}>
              <Icon.GridRadio />
              Сетка флажков
            </Option>
            <Option value={'date'}>
              <Icon.Calendar />
              Дата
            </Option>
            <Option value={'time'}>
              <Icon.Time />
              Время
            </Option>
          </Select>
        </div>
      ) : null}

      <div css={{ width: '100%', marginTop: '30px' }}>
        <QuestionSwitch
          typeItems={state.type}
          updateParameters={changeParameters}
          initialParam={state.parameters}
        />
      </div>
    </div>
  )
}

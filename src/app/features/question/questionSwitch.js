import React from 'react'
import Select from './../../components/Select'
import Option from './../../components/Option'
import * as Icon from './../../assets/icons'

export default function QuestionSwitch({ switchQieston, current }) {
  return (
    <>
      <Select onChange={switchQieston} seleced={current}>
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
        <Option value={'select-checkbox'}>
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
    </>
  )
}

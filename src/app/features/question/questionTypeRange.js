import React, { useState, useEffect } from 'react'
import Select from './../../components/Select'
import Option from './../../components/Option'
import { Input } from './../../lib'
import { nanoid } from 'nanoid'

export default function QuestionTypeRange({ updateParameters }) {
  const [rangeState, setRangeState] = useState({
    from: 0,
    to: 10,
    labelFrom: '',
    labelTo: '',
  })

  const handleChange = (key) => {
    return (value) => {
      setRangeState((range) => ({
        ...range,
        [key]: value,
      }))
    }
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setRangeState((range) => ({
      ...range,
      [name]: value,
    }))
  }
  useEffect(() => {
    updateParameters(rangeState, 'range')
  }, [updateParameters, rangeState])

  return (
    <div>
      <Select
        onChange={handleChange('from')}
        widthList='55px'
        css={{ width: '50px', border: 'none' }}
        cssList={{ width: '50px' }}
      >
        <Option value='number-1'>1</Option>
        <Option value='number-2'>2</Option>
      </Select>

      <Select
        onChange={handleChange('to')}
        widthList='55px'
        css={{ width: '50px', border: 'none' }}
        cssList={{ width: '50px' }}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
          <Option value={`number-${value}`}>{value}</Option>
        ))}
      </Select>
      <Input
        placeholder='Подпись (необязательно)'
        name='labelFrom'
        value={rangeState.labelFrom}
        onChange={handleChangeInput}
      />
      <Input
        placeholder='Подпись (необязательно)'
        name='labelTo'
        value={rangeState.labelTo}
        onChange={handleChangeInput}
      />
    </div>
  )
}

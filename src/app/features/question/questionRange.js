import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { nanoid } from 'nanoid'

export default function QuestionRange() {
  const [range, setRagne] = useState({ from: 0, to: 10 })

  const handleChange = (e) => {
    const { name, value } = e.target

    setRagne((range) => ({
      ...range,
      [name]: value,
    }))
  }

  return (
    <div>
      <FormControl>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={range.from}
          name='from'
          onChange={handleChange}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
        </Select>
      </FormControl>
      -
      <FormControl>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={range.to}
          name='to'
          onChange={handleChange}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
            <MenuItem key={nanoid()} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function QuestionTypeSelect({ onSelect, selected }) {
  const classes = useStyles()

  const handleChange = (event) => {
    onSelect(event.target.value)
  }
  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={selected}
          onChange={handleChange}
        >
          <MenuItem value={'text-line'}>text-line</MenuItem>
          <MenuItem value={'text-paragraph'}>text-paragraph</MenuItem>
          <MenuItem value={'select-radio'}>select-radio</MenuItem>
          <MenuItem value={'select-check'}>select-check</MenuItem>
          <MenuItem value={'select-drop'}>select-drop</MenuItem>
          <MenuItem value={'range'}>range</MenuItem>
          <MenuItem value={'grid-radio'}>grid-radio</MenuItem>
          <MenuItem value={'grid-check'}>grid-check</MenuItem>
          <MenuItem value={'date'}>date</MenuItem>
          <MenuItem value={'time'}>time</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

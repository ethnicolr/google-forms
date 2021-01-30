import React, { useEffect, useState, useRef } from 'react'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    border: '2px solid black',
    padding: '25px 15px',
    borderRadius: '5px',
    textAlign: 'left',
    width: '500px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '30px',
  },
  title: {
    fontSize: '45px',
    fontWeight: '400',
    color: '#000',
    padding: '1px',
    margin: '0',
  },
})

export default function Container() {
  const [edit, setEdit] = useState(true)
  const [state, setState] = useState({
    title: 'Новая форма',
    desc: 'Описание',
  })
  const classes = useStyles()
  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setEdit((edit) => false)
      } else {
        setEdit((edit) => true)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((state) => ({
      ...state,
      [name]: value,
    }))
  }
  return (
    <div className={classes.root} ref={wrapperRef}>
      {edit ? (
        <form className={classes.form}>
          <Input
            id='standard-basic'
            fullWidth
            size='medium'
            inputProps={{ style: { fontSize: '45px' } }}
            name='title'
            value={state.title}
            onChange={handleChange}
            variant='filled'
          />
          <Input
            id='standard-basic'
            fullWidth
            className={classes.input}
            inputProps={{ style: { fontSize: '35px' } }}
            name='desc'
            value={state.desc}
            onChange={handleChange}
          />
        </form>
      ) : (
        <div>
          <h1 className={classes.title}>{state.title}</h1>
          <h1 className={classes.title}>{state.desc}</h1>
        </div>
      )}
    </div>
  )
}

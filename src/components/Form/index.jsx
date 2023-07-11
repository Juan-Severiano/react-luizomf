import React from 'react'
import { BiPlus } from 'react-icons/bi'
import PropTypes from 'prop-types'
import './Form.css'

export default function Form({ handleSubmit, handleChange, newTask }) {
  return (
    <form action="#" className='form' onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={newTask}
      />
      <button type='submit'>
        <BiPlus />
      </button>
    </form>
  )
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask : PropTypes.string.isRequired,
}

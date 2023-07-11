import React from 'react'
import { BiPencil, BiTrash } from 'react-icons/bi'
import PropTypes from 'prop-types'
import './Tasks.css'

export default function Tasks({ tasks, editTask, deleteTask }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>{task}
          <span>
            <BiPencil className='edit' onClick={e => editTask(e, index)} />
            <BiTrash className='delete' onClick={e => deleteTask(e, index)} />
          </span>
        </li>
      ))}
    </ul>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

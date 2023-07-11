import React, { Component } from 'react'

import { BiPlus } from 'react-icons/bi'

import { BiPencil, BiTrash } from 'react-icons/bi'
import './Main.css'

export default class Main extends Component {
    state = {
        newTask: '',
        tasks : []
    }

    handleChange = e => {
        this.setState({
            newTask: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { tasks } = this.state
        let { newTask } = this.state
        newTask = newTask.trim()

        if (tasks.indexOf(newTask) !== -1) return

        const newTasks = [ ...tasks]

        this.setState({
            tasks : [ ...newTasks, newTask],
        })
    }

    deleteTask = (e, index) => {
      const { tasks } = this.state
      const newTasks = [ ...tasks]

      newTasks.splice(index, 1)

      this.setState({
        tasks : [ ...newTasks],
    })
    }

    editTask = (e, index) => {

    }

    render() {
        const { newTask, tasks } = this.state

        return (
            <div className='container main'>
                <h1>Lista de tarefas</h1>

                <form action="#" className='form' onSubmit={this.handleSubmit}>
                    <input
                    onChange={this.handleChange}
                    type="text"
                    value={ newTask }
                     />
                    <button type='submit'>
                        <BiPlus />
                    </button>
                </form>

                <ul className="tasks">
                    {tasks.map((task, index) => (
                        <li key={task}>{task}
                         <span>
                            <BiPencil className='edit' onClick={e => this.editTask(e, index)} />
                            <BiTrash className='delete' onClick={e => this.deleteTask(e, index)}/>
                         </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}



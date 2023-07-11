import React, { Component } from 'react'

import { BiPlus } from 'react-icons/bi'

import { BiPencil, BiTrash } from 'react-icons/bi'
import './Main.css'

export default class Main extends Component {
    state = {
        newTask: '',
        tasks : [
            'fazer café', 'comer alguem', 'terminar a desgraça desse curso'
        ]
    }

    handleChange = e => {
        this.setState({
            newTask: e.target.value
        })
    }


    render() {
        const { newTask, tasks } = this.state

        return (
            <div className='container main'>
                <h1>Lista de tarefas</h1>

                <form action="#" className='form'>
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
                    {tasks.map((task) => (
                        <li key={task}>{task}
                         <div>
                            <BiPencil className='edit' />
                            <BiTrash className='delete'/>
                         </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}



import React, { Component } from 'react'
import { BiPlus } from 'react-icons/bi'
import './Main.css'

export default class Main extends Component {
    state = {
        newTask: '',
    }

    handleChange = e => {
        this.setState({
            newTask: e.target.value
        })
    }


    render() {
        const { newTask } = this.state

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
            </div>
        )
    }
}



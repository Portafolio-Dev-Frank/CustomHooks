import React, { useEffect, useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'aprender React',
    //     done: false
    // }]
    return JSON.parse(sessionStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);


    useEffect(() => {
        sessionStorage.setItem('todos', JSON.stringify(todos))
        return () => {
            console.log('removido el effect');
        }
    }, [todos])


    const handleAdd = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    const handleDelete = (todoId) => {
        dispatch({
            type: 'remove',
            payload: todoId
        })
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }



    return (
        <div>
            <h1>TodoApp : ({todos.length})</h1>
            <hr></hr>
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}></TodoList>
                </div>
                <div className="col-5">
                    <TodoAdd handleAdd={handleAdd}></TodoAdd>
                </div>

            </div>
        </div>
    )
}

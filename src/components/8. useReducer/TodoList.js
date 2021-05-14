import React from 'react'
import './styles.css'
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleToggle, handleDelete }) => {

    return (
        <>
            <h3>TodoList</h3>
            <ul className="list-group list-group-flush">
                {
                    todos.map((todo, index) => (
                        <TodoListItem key={todo.id} todo={todo} index={index} handleToggle={handleToggle}
                            handleDelete={handleDelete} ></TodoListItem>
                    ))
                }
            </ul>
        </>
    )
}

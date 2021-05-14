import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAdd }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAdd(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar Todo</h4>
            <hr></hr>
            <form onSubmit={handleOnSubmit}>
                <div class="d-grid gap-2">
                    <input
                        type="text"
                        name="description"
                        placeholder="aprender"
                        autoComplete="off"
                        value={description}
                        onChange={handleInputChange}
                    >
                    </input>
                    <button type="submit" className="btn btn-outline-info mt-1">
                        agregar
                        </button>
                </div>
            </form>
        </>
    )
}

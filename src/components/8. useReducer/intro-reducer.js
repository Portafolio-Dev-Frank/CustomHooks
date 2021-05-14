
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]

const todoReducer = (state = initialState, action) => {

    if (action?.type === 'agregarTodo') {
        return [...state, action.payload]
    }
    return state
}



const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const agregarTodo = {
    type: 'agregarTodo',
    payload: newTodo
}

const todoInitial = todoReducer();

const todos = todoReducer(todoInitial, agregarTodo);

console.log(todos);
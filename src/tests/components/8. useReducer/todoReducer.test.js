import { todoReducer } from "../../../components/8. useReducer/todoReducer"
import { demosTodos } from "../../fixtures/demoTodos";


describe('pruebas en <todoReducer></todoReducer>', () => {

    test('debe de retornar el estado por defecto ', () => {
        const state = todoReducer(demosTodos, {});
        expect(state.length).toEqual(2);
    });

    test('debe de agregar un todo', () => {
        const action = {
            type: 'add',
            payload: {
                id: 3,
                desc: 'APRENDER  VUE',
                done: false
            }

        }
        const state = todoReducer(demosTodos, action);
        expect(state.length).toEqual(3);
        expect(state).toEqual([...demosTodos, action.payload])
    });

    test('debe de borrar un TODO ', () => {
        const action = {
            type: 'remove',
            payload: 1
        }
        const state = todoReducer(demosTodos, action);
        expect(state.length).toEqual(1);
        expect(state).toEqual(demosTodos.filter(todo => todo.id !== action.payload))
    })

    test('debe de hacer el TOOGLE del TODO ', () => {
        const action = {
            type: 'toggle',
            payload: 1
        }
        const state = todoReducer(demosTodos, action);
        console.log(state);
        expect(state[0].done).toBe(true);
    })
    
    

})

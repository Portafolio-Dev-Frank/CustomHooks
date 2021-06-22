import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/8. useReducer/TodoListItem";
import { demosTodos } from "../../fixtures/demoTodos";



describe('pruebas en <TodoListItem></TodoListItem>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demosTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />)

    test('debe renderizarse el componente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de llamar la funcion de handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(1);
    });

    test('debe de llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(1);
    });

    test('debe de mostrar el texto correctamente ', () => {
        const p = wrapper.find('p').text().trim();
        expect(p).toBe(`1. ${demosTodos[0].desc}`)
    })

    test('debe de tener la clase compelte si el todo.done = true', () => {
        const todo = demosTodos[0];
        todo.done = true;

        const wrapper = shallow(<TodoListItem
        todo= {todo}
        ></TodoListItem>)
        expect(wrapper.find('p').hasClass('complete')).toBe(true)
    })
    


})

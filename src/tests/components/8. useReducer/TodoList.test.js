import { shallow } from "enzyme"
import { TodoList } from "../../../components/8. useReducer/TodoList";
import { demosTodos } from "../../fixtures/demoTodos"


describe('pruebas en <TodoList></TodoList>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoList
        todos={demosTodos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
    >
    </TodoList>)

    test('debe de tener dos <TodoListItem></TodoListItem>', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demosTodos.length);
        // console.log(wrapper.find('TodoListItem').at(0).props());
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    })

})

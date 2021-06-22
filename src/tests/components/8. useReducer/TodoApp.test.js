import { act } from "@testing-library/react"
import { mount, shallow } from "enzyme"
import { TodoApp } from "../../../components/8. useReducer/TodoApp"
import { demosTodos } from "../../fixtures/demoTodos"

describe('pruebas en componente <TodoApp></TodoApp>', () => {


    const wrapper = shallow(<TodoApp></TodoApp>)

    Storage.prototype.setItem = jest.fn(() => {});

    test('debe de renderizarse el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de agregar un TODO', () => {
        // mount mas complejo que shallow
        const wrapper = shallow(<TodoApp></TodoApp>);

        act(() => {
            wrapper.find('TodoAdd').prop('handleAdd')(demosTodos[0]);
            wrapper.find('TodoAdd').prop('handleAdd')(demosTodos[1]);
        })
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp : (2)');
        // expect(localStorage.setItem).toHaveBeenCalledTimes(3);
    })

})

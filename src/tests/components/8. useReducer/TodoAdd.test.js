import { shallow } from "enzyme"
import { TodoAdd } from "../../../components/8. useReducer/TodoAdd"


describe('pruebas en <TodoAdd></TodoAdd>', () => {

    const handleAdd = jest.fn();
    const wrapper = shallow(<TodoAdd
        handleAdd={handleAdd}
    ></TodoAdd>)

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('no debe de llamar addTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault() {}})
        expect(handleAdd).toHaveBeenCalledTimes(0);
    })

    test('debe de llamar la funcion handleAdd', () => {
        const input = wrapper.find('input');
        const value = 'valor de formulario';
        input.simulate('change', { target: { value, name: 'description' } });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault() {}})
        expect(handleAdd).toHaveBeenCalled();
        expect(handleAdd).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAdd).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc:value,
            done: false
        });
        expect(wrapper.find('input').prop('value')).toBe('')
    })
    
    
})

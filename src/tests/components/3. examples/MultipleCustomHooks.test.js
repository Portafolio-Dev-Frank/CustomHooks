import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../../components/3. examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
jest.mock('../../../hooks/useFetch');


describe('pruebas en <MultipleCustomHooks></MultipleCustomHooks>', () => {
    
    test('debe de renderizar correctamente el componente ', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks></MultipleCustomHooks>)
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar la informacion cargada ', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'francisco',
                quote: 'hola a todos'
            }],
            loading: false,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks></MultipleCustomHooks>)
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('hola a todos');
        console.log(wrapper.html());
        
    })
    


    
})

import { shallow } from "enzyme"
import { RealExampleRef } from "../../../components/4. useRef/RealExampleRef"

describe('pruebas en <RealExampleRef></RealExampleRef> ', () => {
    test('debe renderizarse el snapshot ', () => {
        const wrapper = shallow(<RealExampleRef></RealExampleRef>)
        expect(wrapper).toMatchSnapshot();

    })

    test('debe mostrarse el componente <MultipleCustomHooks></MultipleCustomHooks> ', () => {
        const wrapper = shallow(<RealExampleRef></RealExampleRef>)
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })


})

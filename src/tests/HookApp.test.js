import { shallow } from 'enzyme'
import React from 'react'
import { HookApp } from '../HookApp'

describe('pruebas en HookApp', () => {
    test('debe de mostrar correctamente HookApp ', () => {
        const wrapper = shallow(<HookApp></HookApp>)
        expect(wrapper).toMatchSnapshot();
    })

})

import { shallow } from "enzyme"
import { LoginPage } from "../../../components/9. useContext/LoginPage"
import { UserContext } from "../../../components/9. useContext/UserContext"


describe('pruebas en <LoginPage></LoginPage>', () => {

    const user = {
        name: 'francisco',
        email: 'francisco.email.co'
    }
    const setUser = jest.fn();
    // para que las pruebas pasen debe ser mount y no shallow
    const wrapper = shallow(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <LoginPage></LoginPage>
        </UserContext.Provider>)

    test('debe de renderizarse el componente LoginPage', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de ejecutar el setUser con el argumento esperado  id: 1234 nombre: juancho', () => {
        
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledTimes(1);
    })
    
    
})
